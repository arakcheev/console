package models.entities

import models.SecureGen
import models.db.MongoDB
import models.entities.User._
import models.services.aws.S3
import play.api.Logger
import play.api.libs.Crypto
import play.api.libs.json.{JsString, Json}
import play.api.mvc.RequestHeader
import reactivemongo.bson._
import reactivemongo.core.commands.LastError

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

/**
 * Created by artem on 13.11.14.
 */
case class Task(var id: Option[BSONObjectID], var user: String, var name: String, var toUser: String, var fromDate: Long,
                var toDate: Long, var date: Long, var status: Int, var system: String, docType: String, docID: String) {

}

object Task extends MongoDB {

  import reactivemongo.api.collections.default.BSONCollection

  val collection = db.collection[BSONCollection]("task")

  implicit object TaskWriter extends BSONDocumentWriter[Task] {
    def write(task: Task): BSONDocument = {
      BSONDocument(
        "_id" -> task.id.getOrElse(BSONObjectID.generate),
        "user" -> task.user,
        "name" -> task.name,
        "toUser" -> task.toUser,
        "fromDate" -> BSONDateTime(task.fromDate),
        "toDate" -> BSONDateTime(task.toDate),
        "date" -> BSONDateTime(task.date),
        "status" -> BSONInteger(task.status),
        "system" -> task.system,
        "docType" -> task.docType,
        "docID" -> task.docID
      )
    }
  }

  implicit object TaskReader extends BSONDocumentReader[Task] {
    def read(doc: BSONDocument): Task = {
      Task(
        doc.getAs[BSONObjectID]("_id"),
        doc.getAs[String]("user").getOrElse(""),
        doc.getAs[String]("name").getOrElse(""),
        doc.getAs[String]("toUser").getOrElse(""),
        doc.getAs[BSONDateTime]("fromDate").map(_.value).getOrElse(0l),
        doc.getAs[BSONDateTime]("toDate").map(_.value).getOrElse(0l),
        doc.getAs[BSONDateTime]("date").map(_.value).getOrElse(0l),
        doc.getAs[Int]("status").getOrElse(0),
        doc.getAs[String]("system").getOrElse(""),
        doc.getAs[String]("docType").getOrElse(""),
        doc.getAs[String]("docID").getOrElse("")
      )
    }
  }

  def apply(user: User, name: String, fromDate: Long, toDate: Long, toUser: Option[String], system: String, docType: String, docID: String): Task = {
    this(None, user.id.get.stringify, name, toUser.getOrElse(""), fromDate, toDate, System.currentTimeMillis(), 1, system, docType, docID)
  }

  def save(task: Task) = {
    var id = BSONObjectID.generate
    if (task.id.isEmpty) {
      task.id = Some(id)
    } else {
      id = task.id.get
    }
    collection.save(task).map { le =>
      if (le.inError)
        ""
      else
        id.stringify
    }
  }


}
