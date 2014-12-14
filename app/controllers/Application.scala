package controllers

import play.api._
import play.api.http.MimeTypes
import play.api.libs.json.{JsArray, JsValue, Json}
import play.api.libs.ws.WS
import play.api.mvc._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

object Application extends JsonSerializerController with Secured {

  def index(url: String) = Action { implicit r =>
    if (url != "") {
      Ok("Empty url")
    } else {
      Ok(views.html.index("Your new application is ready."))
    }
  }

  def proxy(system: String, url: String) = Action.async { implicit r =>
    import Play.current
    Logger.logger.debug(s"${r.method} ${"http://localhost:9001/" + url}?${r.rawQueryString} with method ${r.method}")

    val res = WS.url(s"${"http://localhost:9001/" + url}?${r.rawQueryString}").
      withHeaders(r.headers.toMap.map(s => (s._1, s._2.head)).toSeq: _*)

    (r.method match {
      case "GET" => res.get()
      case "POST" => res.post(r.body.asJson.getOrElse(Json.obj()))
    }).map { responce =>
      new Status(responce.status).apply(responce.body).as(MimeTypes.JSON)
    }
  }

  /**
   * Returns the JavaScript router that the client can use for "type-safe" routes.
   * Uses browser caching; set duration (in seconds) according to your release cycle.
   * @param varName The name of the global variable, defaults to `jsRoutes`
   */
  def jsRoutes(varName: String = "jsRoutes") = /*Cached(_ => "jsRoutes", duration = 1) {*/
    Action { implicit request =>
      val routes = Registration.routeCache ++ routeCache ++ AccountControl.routeCache ++ TaskControl.routeCache ++
        CommentControl.routeCache
      Ok(Routes.javascriptRouter(varName)(routes: _*)).as(JAVASCRIPT)
      /*}*/
    }

}
