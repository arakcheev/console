package controllers

import models.entities.User
import play.api.libs.json.{JsSuccess, JsError, Json}

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
  def update = Auth.auth(parse.tolerantJson) { user => implicit request =>
    val name = request.body.\("name").as[String]
    val value = request.body.\("value").as[String]
    User.setAccountValue(user.id.get.stringify, name, value).map { le =>
      ok(Json.obj("updated" -> true))
    }.getOrElse(bad("Error change params"))
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
