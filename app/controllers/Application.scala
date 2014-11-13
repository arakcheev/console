package controllers

import play.api._
import play.api.libs.json.{JsArray, JsValue, Json}
import play.api.mvc._

import scala.concurrent.Future

object Application extends JsonSerializerController with Secured {

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
      val routes = Registration.routeCache ++ routeCache ++ AccountControl.routeCache ++ TaskControl.routeCache
      Ok(Routes.javascriptRouter(varName)(routes: _*)).as(JAVASCRIPT)
      /*}*/
    }

}
