package controllers

import models.entities.User
import play.api.libs.functional.syntax._
import play.api.libs.json.Reads._
import play.api.libs.json.{Json, _}
import play.api.mvc.{Result, Action, Cookie, DiscardingCookie}

import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by artem on 10.11.14.
 */
object Registration extends ResultJsonSerializer {

  /**
   * Destroy all cookies
   * @return
   */
  def logout = Action { implicit request =>
    Ok("logout").discardingCookies(DiscardingCookie(name = User.COOKIE_AUTH), DiscardingCookie(name = User.COOKIE_EMAIL))
  }

  /**
   * Register new user by email and password
   * @return [[ResultJsonSerializer]]
   */
  def signup = Action.async(parse.tolerantJson) {
    implicit request =>
      implicit val method = "signup"
      request.body.validate(LoginCredentialsFromJson) match {
        case c: JsSuccess[LoginCredentials] => {
          val credentials: LoginCredentials = c.get
          User.registerNewUser(credentials.email, credentials.password).map { info =>
            info._2 match {
              case Some(error) =>
                bad(error)
              case None =>
                ok(Json.obj("uuid" -> info._1))
            }
          }.recover(recover)
        }
        case e: JsError =>
          futureBad(s"Incorrect register data. ${e.errors}")
      }
  }

  /**
   * Signin method by two strategies: with email in request body of crypto email cookie.
   * @return [[ResultJsonSerializer]] with cookies
   */
  def signin = Action.async(parse.tolerantJson) { implicit request =>
    implicit val method = "signin"
    def result: String => Result = { s =>
      ok(Json.obj("uuid" -> s)).
        withCookies(Cookie(User.COOKIE_EMAIL, s, Some(86400)), Cookie(User.COOKIE_AUTH, s))
    }
    request.body.\("password").validate[String] match {
      case p: JsSuccess[String] =>
        val password = p.get
        request.body.\("email").validate[String] match {
          case e: JsSuccess[String] =>
            val email = e.get
            User.authenticate(email, password).map {
              case Some(user) =>
                result.apply(user.uuid.get)
              case None =>
                bad(s"Bad login/password")
            }.recover(recover)
          case e: JsError =>
            User.authenticate(request, password).map {
              case Some(user) =>
                result.apply(user.uuid.get)
              case None =>
                bad(s"Bad cookie/password")
            }.recover(recover)
        }
      case e: JsError =>
        futureBad(s"Incorrect register data. ${e.errors}")
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

  /** Used for obtaining the email and password from the HTTP login request */
  case class LoginCredentials(email: String, password: String)

  /** JSON reader for [[LoginCredentials]]. */
  implicit val LoginCredentialsFromJson = (
    (__ \ "email").read[String](email) ~
      (__ \ "password").read[String](minLength[String](3))
    )((email, password) => LoginCredentials(email, password))

}
