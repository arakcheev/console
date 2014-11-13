package controllers

import models.entities.{User, Task}
import play.api.libs.json.Reads._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import scala.concurrent.ExecutionContext.Implicits.global
/**
 * Created by artem on 13.11.14.
 */
object TaskControl extends JsonSerializerController with Secured {


  def newTask = Auth.async(parse.tolerantJson) { user => implicit request =>
    request.body.validate(
      ((__ \ "name").read[String] ~
        (__ \ "fromDate").read[Int] ~
        (__ \ "toDate").read[Int] ~
        (__ \ "toUser").readNullable[String] ~
        (__ \ "system").read[String] ~
        (__ \ "docType").read[String] ~
        (__ \ "docID").read[String])((name, fromDate, toDate, toUser, system, docType, docID) => Task(user, name, fromDate.toLong, toDate.toLong, toUser, system, docType, docID))) match {
      case c: JsSuccess[Task] =>
        val task = c.get
        Task.save(task).map { id =>
          ok(Json.obj(
            "id" -> id
          ))
        }
      case JsError(error) =>
        futureBad("Error parse json")
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
