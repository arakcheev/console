package controllers

import play.api._
import play.api.libs.json.{JsValue, Json}
import play.api.mvc._

import scala.concurrent.Future

object Application extends ResultJsonSerializer with Secured {

  def index(url: String) = Action{  implicit r =>
    import com.bf.sdk.Main._

    saveRepo
    Ok(views.html.index("Your new application is ready."))
  }

  /**
   * Retrieves all routes via reflection.
   * http://stackoverflow.com/questions/12012703/less-verbose-way-of-generating-play-2s-javascript-router
   * @todo If you have controllers in multiple packages, you need to add each package here.
   */
  val routeCache = {
    val jsRoutesClass = classOf[routes.javascript]
    val controllers = jsRoutesClass.getFields.map(_.get(null))
    controllers.flatMap { controller =>
      controller.getClass.getDeclaredMethods.map { action =>
        action.invoke(controller).asInstanceOf[play.core.Router.JavascriptReverseRoute]
      }
    }
  }

  /**
   * Returns the JavaScript router that the client can use for "type-safe" routes.
   * Uses browser caching; set duration (in seconds) according to your release cycle.
   * @param varName The name of the global variable, defaults to `jsRoutes`
   */
  def jsRoutes(varName: String = "jsRoutes") = /*Cached(_ => "jsRoutes", duration = 1) {*/
    Action { implicit request =>
      val routes = Registration.routeCache ++ routeCache ++ AccountControl.routeCache
      Ok(Routes.javascriptRouter(varName)(routes: _*)).as(JAVASCRIPT)
      /*}*/
    }

}

trait ResultJsonSerializer extends Controller {

  import play.api.Play.current
  import play.api.http.ContentTypes

  def recover: PartialFunction[Throwable, Result] = {
    case e: Exception =>
      if (play.api.Play.isDev) {
        InternalServerError(e.getMessage)
      } else {
        bad("Internal server error")
      }
  }


  def info(method: String, status: Int) = Json.obj("status" -> status, "method" -> method)

  def errors(error: String) = Json.obj("code" -> 1, "message" -> error)

  def result(data: JsValue = Json.obj(), info: JsValue = Json.obj(), errors: JsValue = Json.obj()) = Json.obj("result" -> Json.arr(
    Json.obj(
      "data" -> data
    ), info,
    errors
  ))

  def ok(js: JsValue)(implicit method: String = "") = {
    new Status(200).apply(result(js, info(method, 200))).as(ContentTypes.JSON)
  }

  def futureOk(js: JsValue)(implicit method: String = "") = {
    Future.successful(ok(js)(method))
  }

  def bad(cause: String)(implicit method: String = "") = {
    new Status(400).apply(result(info = info(method, 400), errors = errors(cause))).as(ContentTypes.JSON)
  }

  def futureBad(cause: String)(implicit method: String = "") = {
    Future.successful(bad(cause)(method))
  }

  def redirect(implicit method: String = "")  ={
    new Status(300).apply(result(info = info(method, 300))).as(ContentTypes.JSON)
  }

  def futureRedirect(implicit method: String = "") = Future.successful(redirect)
}