/*
 * Copyright 2014. Arakcheev Artem (artem.arakcheev@phystech.edu)
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package controllers

import models.entities.User
import play.api.libs.functional.syntax._
import play.api.libs.json.Reads._
import play.api.libs.json._
import play.api.mvc.{Cookie, Action, DiscardingCookie}


/**
 *
 */
object Registration extends JsonSerializerController {

  /**
   * Destroy all cookies
   * @return
   */
  def logout = Action { implicit request =>
    Ok("logout").discardingCookies(DiscardingCookie(name = User.COOKIE_AUTH), DiscardingCookie(name = User.COOKIE_EMAIL))
  }

  /**
   * Register new user by email and password
   * @return [[JsonSerializerController]]
   */
  def signup = Action.async(parse.anyContent) { implicit request =>
    import scala.concurrent.ExecutionContext.Implicits.global
    import scala.concurrent.Future
    request.body.asJson.getOrElse(Json.obj()).validate(
      ((__ \ "email").read[String] ~ (__ \ "pass").read[String])((email: String, pass: String) => User.reg(email, pass))
    ) match {
      case d: JsSuccess[Future[Option[User]]] =>
        d.get.map {
          case Some(user) =>
            ok(Json toJson user).withCookies(Cookie(User.COOKIE_AUTH, user.uuid.get), Cookie(User.COOKIE_AUTH, user.uuid.get))
          case None =>
            bad("Error register user")
        }
      case JsError(e) =>
        futureBad("Error register user")
    }
  }

  /**
   * Signin method by two strategies: with email in request body or crypto email cookie.
   * @return [[JsonSerializerController.result]] with cookies
   */
  def signin = Action.async(parse.anyContent) { implicit request =>
    import scala.concurrent.ExecutionContext.Implicits.global
    import scala.concurrent.Future
    request.body.asJson.getOrElse(Json.obj()).validate(
      ((__ \ "email").readNullable[String] ~ (__ \ "pass").readNullable[String])((email: Option[String], pass: Option[String]) => {
        User.authenticate(request, email, pass)
      })
    ) match {
      case d: JsSuccess[Future[Option[User]]] =>
        d.get.map {
          case Some(user) =>
            ok(Json toJson user).withCookies(Cookie(User.COOKIE_AUTH, user.uuid.get), Cookie(User.COOKIE_AUTH, user.uuid.get))
          case None =>
            bad("Error register user")
        }
      case JsError(e) =>
        futureBad("Error register user")
    }
  }

}
