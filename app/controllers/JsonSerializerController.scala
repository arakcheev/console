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

import play.api.libs.json._
import play.api.mvc.{Request, AnyContent, Result, Controller}

import scala.concurrent.Future

/**
 * @author Artem Arakcheev
 * @since 12.11.14
 */

trait JsonSerializerController extends Controller {

  import play.api.Play.current
  import play.api.http.ContentTypes

  /**
   * Retrieves all routes via reflection.
   * http://stackoverflow.com/questions/12012703/less-verbose-way-of-generating-play-2s-javascript-router
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

  def recover: PartialFunction[Throwable, Result] = {
    case e: Exception =>
      if (play.api.Play.isDev) {
        InternalServerError(e.getMessage)
      } else {
        bad("Internal server error")
      }
  }

  /**
   * //todo: Wrap all requests to one pattern
   * //TODO: replace json reads/writes to Json format
   * //TODO: test shows that parse.tolerantJson will get invalid Json bad request.
   * @param request
   * @tparam T
   */
  def !>>[T, A](reads: Reads[Future[Option[T]]])(implicit request: Request[AnyContent], format: Writes[T]): Future[Result] = {
    implicit val method = request.uri //todo method from request. It may be such implementation
    import scala.concurrent.ExecutionContext.Implicits.global
    request.body.asJson.getOrElse(Json.obj()).validate(reads) match {
      case d: JsSuccess[Future[Option[T]]] =>
        d.get.map { doc =>
          ok(Json toJson doc)
        }
      case JsError(e) =>
        futureBad(s"Error parse json. ${e}")
    }
  }

  /**
   * Wrap all actions with Traversable[T] model result
   * @param obj
   * @param request
   * @param format
   * @tparam T
   * @return
   */
  def >>![T](obj: Future[Traversable[T]])(implicit request: Request[AnyContent], format: Writes[T], isApi: Boolean = false): Future[Result] = {
    import scala.concurrent.ExecutionContext.Implicits.global
    implicit val method = request.uri
    obj map { o =>
      ok(Json toJson o)
    }
  }

  /**
   * Wrap all actions with Option[T] model result
   * @param obj
   * @param request
   * @param format
   * @tparam T
   * @return
   */
  def !>>[T, A](obj: Future[Option[T]])(implicit request: Request[A], format: Writes[T]) = {
    import scala.concurrent.ExecutionContext.Implicits.global
    implicit val method = request.uri
    obj map { o =>
      ok(Json toJson o)
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

  def redirect(implicit method: String = "") = {
    new Status(300).apply(result(info = info(method, 300))).as(ContentTypes.JSON)
  }

  def futureRedirect(implicit method: String = "") = Future.successful(redirect)
}
