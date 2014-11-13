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
        (__ \ "docID").read[String])((name, fromDate, toDate, toUser, system, docType, docID) =>
        Task(user, name, fromDate.toLong, toDate.toLong, toUser, system, docType, docID))) match {
      case c: JsSuccess[Task] =>
        Task.save(c.get).map { id =>
          ok(Json.obj(
            "id" -> id
          ))
        }.recover(recover)
      case JsError(error) =>
        futureBad("Error parse json")
    }
  }


}
