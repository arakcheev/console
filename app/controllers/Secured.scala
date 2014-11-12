package controllers

import models.entities.User
import play.api.mvc.{BodyParser, Action, Request}
import play.api.mvc.Result
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by artem on 10.11.14.
 */
trait Secured {
  self: JsonSerializerController =>

  trait AuthBuilder {
    self =>

    def auth[A](p: BodyParser[A] = parse.anyContent)(
      f: User => Request[A] => Result): Action[A] = {
      Action.async(p) { implicit request =>
        User.fromRequest(request).map {
          case Some(user) =>
            f(user)(request)
          case None => bad("Invalid Token cookie")
        }.recover(recover)
      }
    }

  }

  object Auth extends AuthBuilder {

  }

}
