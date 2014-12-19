package controllers

import models.services.aws.S3
import play.api._
import play.api.http.MimeTypes
import play.api.libs.json.{JsArray, JsValue, Json}
import play.api.libs.ws.WS
import play.api.mvc.MultipartFormData.FilePart
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
      case "POST" if r.body.asMultipartFormData.isDefined => {
        Logger.logger.debug(s" ${r.body.asMultipartFormData.get.file("file").get.ref.file}") //todo:
        res.post(r.body.asMultipartFormData.get.file("file").get.ref.file)
      }
      case "POST" if r.body.asMultipartFormData.isEmpty => res.post(r.body.asJson.getOrElse(Json.obj()))
    }).map { responce =>
      new Status(responce.status).apply(responce.body).as(MimeTypes.JSON)
    }
  }

  def put(folder: String) = Auth.async(parse.multipartFormData) { implicit user => implicit request =>
    request.body.file("file") match {
      case Some(FilePart(key, name, cp, ref)) =>
        S3.put(ref.file, name, folder).map { r =>
          ok(Json.obj(
            "url" -> r._1
          ))
        }
      case _ => futureBad("Error loading file")
    }
  }

  def foo = Auth.auth(parse.raw){ implicit user => implicit r =>
    r.body.asBytes().map(println)
    ok(Json.obj())
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
