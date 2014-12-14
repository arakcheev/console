package models.entities

import akka.actor.{Actor, Props, ActorRef}
import models.db.MongoConnection
import models.entities.Task._
import play.api.Logger

import play.api.libs.json.{Json, _}
import reactivemongo.bson._
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by artem on 14.11.14.
 */
case class Comment(var id: Option[BSONObjectID], user: String, text: String, date: Long, system: String, docType: String,
                   docId: String, status: Int) {

}

object CommentActor {

  import reactivemongo.api.collections.default.BSONCollection

  val collection = MongoConnection.db.collection[BSONCollection]("comment")

  def props(out: ActorRef)(implicit user: User) = Props(new CommentActor(out, user))

  implicit object CommentWriter extends BSONDocumentWriter[Comment] {
    def write(comment: Comment): BSONDocument = {
      BSONDocument(
        "_id" -> comment.id.getOrElse(BSONObjectID.generate),
        "user" -> comment.user,
        "text" -> comment.text,
        "date" -> BSONDateTime(comment.date),
        "system" -> comment.system,
        "docType" -> comment.docType,
        "docId" -> comment.docId,
        "status" -> BSONInteger(comment.status)
      )
    }
  }

  implicit object CommentReader extends BSONDocumentReader[Comment] {
    def read(doc: BSONDocument): Comment = {
      Comment(
        doc.getAs[BSONObjectID]("_id"),
        doc.getAs[String]("user").getOrElse(""),
        doc.getAs[String]("text").getOrElse(""),
        doc.getAs[BSONDateTime]("date").map(_.value).getOrElse(0),
        doc.getAs[String]("system").getOrElse(""),
        doc.getAs[String]("docType").getOrElse(""),
        doc.getAs[String]("docId").getOrElse(""),
        doc.getAs[Int]("status").getOrElse(0)
      )
    }
  }

  def save(c: Comment) = {
    collection.save(c).map { le =>
      if (le.inError) {
        Left(le.message)
      } else {
        Right(le.n)
      }
    }
  }

  def add(user: User, text: String, system: String, docType: String, docId: String) = {
    save(Comment(None, user.id.get.stringify, text, System.currentTimeMillis(), system, docType, docId, 1))
  }

  def get(system: String, docType: String, docId: String) = {
    val selector = BSONDocument(
      "system" -> system,
      "docType" -> docType,
      "docId" -> docId
    )
    collection.find(selector).cursor[Comment].enumerate(stopOnError = false)
  }




}

class CommentActor(out: ActorRef, user: User) extends Actor {

  import play.api.libs.functional.syntax._
  import play.api.libs.json.Reads._

  implicit val CommentJson = (
    (__ \ "text").read[String] ~
      (__ \ "system").read[String] ~
      (__ \ "docType").read[String] ~
      (__ \ "docId").read[String]
    )((text, system, docType, docId) => Comment(None, user.id.get.stringify, text, System.currentTimeMillis(), system, docType, docId, 1))

  def receive = {
    case comment: JsValue =>
          out ! Json.obj("error" -> "error parsing json")
  }
}
