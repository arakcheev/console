package models.entities

import models.SecureGen
import models.entities.db.MongoDB
import play.api.Logger
import play.api.libs.Crypto
import play.api.mvc.RequestHeader
import reactivemongo.bson.{BSONDocumentReader, BSONDocumentWriter, BSONDocument, BSONObjectID}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.util.Random

/**
 * Created by artem on 10.11.14.
 */
case class User(var id: Option[BSONObjectID], var uuid: Option[String], var email: Option[String],
                var password: Option[String], var creditCards: Option[BSONDocument], var account: Option[BSONDocument]) {

}

object User extends MongoDB {

  import reactivemongo.api.collections.default.BSONCollection
  import play.api.libs.json._
  import play.api.libs.functional.syntax._

  val collection = db.collection[BSONCollection]("user")

  val COOKIE_EMAIL = "u_e"

  val COOKIE_AUTH = "u_a"

  implicit object UserWriter extends BSONDocumentWriter[User] {
    def write(user: User): BSONDocument = {
      BSONDocument(
        "_id" -> user.id.getOrElse(BSONObjectID.generate),
        "email" -> user.email.getOrElse(""),
        "uuid" -> user.uuid.getOrElse(""),
        "password" -> user.password.getOrElse(""),
        "creditCards" -> user.creditCards.getOrElse(BSONDocument.empty),
        "account" -> user.account.getOrElse(BSONDocument.empty)
      )
    }
  }

  implicit object UserReader extends BSONDocumentReader[User] {
    def read(doc: BSONDocument): User = {
      User(
        doc.getAs[BSONObjectID]("_id"),
        doc.getAs[String]("uuid"),
        doc.getAs[String]("email"),
        doc.getAs[String]("password"),
        doc.getAs[BSONDocument]("creditCards"),
        doc.getAs[BSONDocument]("account")
      )
    }
  }

  def registerNewUser(email: String, password: String) = {
    byEmail(email).flatMap {
      case Some(user) =>
        Future.successful(("", Some("User already exists")))
      case None =>
        val uuid = SecureGen.nextSessionId()
        collection.save(User(None, Some(uuid), Some(email), Some(Crypto.encryptAES(password)), None, None)).map { le =>
          if (le.inError) {
            Logger.logger.error(s"Mongo error: ${le.message}")
            (uuid, Some("Internal server error"))
          } else {
            (uuid, None)
          }
        }
    }
  }

  def byEmail(email: String) = {
    collection.find(BSONDocument(
      "email" -> email
    )).one[User]
  }

  def byId(id: String) = {
    collection.find(BSONDocument(
      "_id" -> BSONObjectID(id)
    )).one[User]
  }

  def byUUID(uuid: String) = {
    collection.find(BSONDocument(
      "uuid" -> uuid
    )).one[User]
  }

  /**
   * Private method to authenticate crypto passwrod of user
   * @param user - user model
   * @param password - uncripted password
   * @return Future[Boolean]
   */
  private def auth(user: User, password: String) = {
    if (user.password.filter(_ == Crypto.encryptAES(password)).isDefined) {
      Some(user)
    } else None

  }

  /**
   * Authenticate user by email and passwrod
   * @param email user email
   * @param password user uncripted password
   * @return
   */
  def authenticate(email: String, password: String) = {
    byEmail(email).map {
      case Some(user) => auth(user, password)
      case None => None
    }
  }

  /**
   * Authenticate user from request and password
   * @param request user request
   * @param password user uncripted password
   * @return
   */
  def authenticate(request: RequestHeader, password: String) = {
    request.cookies.get(COOKIE_EMAIL) match {
      case Some(cookie) =>
        byUUID(cookie.value).map {
          case Some(user) => auth(user, password)
          case None => None
        }
      case None => Future.successful(None)
    }
  }

  /**
   * Get user from request
   * @param request request headers
   * @return
   */
  def fromRequest(request: RequestHeader) = {
    request.cookies.get(COOKIE_AUTH) match {
      case Some(cookie) =>
        byUUID(cookie.value)
      case None =>
        Future.successful(None)
    }
  }

}
