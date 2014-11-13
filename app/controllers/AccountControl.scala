package controllers

import models.entities.User
import play.api.libs.json.{JsSuccess, JsError, Json}
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by artem on 10.11.14.
 */
object AccountControl extends JsonSerializerController with Secured {


  /**
   * Get user account as json
   * @return
   */
  def account = Auth.auth(parse.empty) { user => implicit request =>
    ok(user.getAccountAsJson)("getProfile")
  }

  /**
   * Update account info. Post request with JSON body: {"name":"attr name","value": "attr value"}
   * @return
   */
  def update = Auth.async(parse.tolerantJson) { user => implicit request =>
    val name = request.body.\("name").as[String]
    val value = request.body.\("value").as[String]
    User.setAccountValue(user.id.get.stringify, name, value).map { le =>
      ok(Json.obj("updated" -> true))
    }.recover(recover)
  }

  def uploadFile = Auth.async(parse.multipartFormData) { user => implicit request =>
    request.body.file("file") match {
      case Some(file) =>
        User.uploadFile(user, file.ref.file).map { result =>
          ok(Json.obj("file" -> result._1))
        }.recover(recover)
      case None => futureBad("Error uploading file")
    }

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

}
