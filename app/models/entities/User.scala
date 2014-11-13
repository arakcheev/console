package models.entities

import java.io.File

import models.SecureGen
import models.db.MongoDB
import models.services.aws.S3
import play.api.Logger
import play.api.libs.Crypto
import play.api.libs.json.{JsString, Json}
import play.api.mvc.RequestHeader
import reactivemongo.bson.{BSONDocument, BSONDocumentReader, BSONDocumentWriter, BSONObjectID}
import reactivemongo.core.commands.LastError

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

/**
 * Created by artem on 10.11.14.
 */
case class User(var id: Option[BSONObjectID], var uuid: Option[String], var email: Option[String],
                var password: Option[String], var creditCards: Option[BSONDocument], var account: Option[BSONDocument]) {

  def getAccountAsJson = {
    account.map { doc =>
      Json.obj(
        "phone_work" -> JsString(doc.getAs[String]("phone_work").getOrElse("")),
        "phone_home" -> JsString(doc.getAs[String]("phone_home").getOrElse("")),
        "index" -> JsString(doc.getAs[String]("index").getOrElse("")),
        "country" -> JsString(doc.getAs[String]("country").getOrElse("")),
        "region" -> JsString(doc.getAs[String]("region").getOrElse("")),
        "city" -> JsString(doc.getAs[String]("city").getOrElse("")),
        "address" -> JsString(doc.getAs[String]("address").getOrElse("")),
        "company_name" -> JsString(doc.getAs[String]("company_name").getOrElse("")),
        "main_srceen_url" -> JsString(doc.getAs[String]("main_srceen_url").getOrElse(""))
      )
    }.getOrElse(Json.obj())
  }


}

object User extends MongoDB {

  import reactivemongo.api.collections.default.BSONCollection

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
        //todo Crypto with shared key
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
    //todo Crypto with shared key
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

  def setAccountValue(id: String, name: String, value: String) = {
    val selector = BSONDocument("_id" -> BSONObjectID(id))
    name match {
      case "phone_work" | "phone_home" | "index" | "country" | "region" | "city" | "address" | "company_name" | "main_srceen_url" =>
        val update = BSONDocument(
          "$set" -> BSONDocument(
            "account." + name -> value.toString
          )
        )
        collection.update(selector, update)

      case _ => Future.successful(LastError.apply(BSONDocument.empty).b)
    }
  }

  def uploadFile(user: User, file: File) = {
    S3.put(file, file.getName, "console/avatars")
  }

  /**
   * Change user password
   * @param user user ot change password
   * @param newPassword
   * @param oldPassword
   * @return Json with boolen result
   */
  def changePassword(user: User, newPassword: String, oldPassword: String) = {
    user.password.filter(_ == Crypto.encryptAES(oldPassword)).map { _ =>
      val selector = BSONDocument("_id" -> user.id.get)
      val update = BSONDocument(
        "$set" -> BSONDocument(
          "password" -> Crypto.encryptAES(newPassword)
        )
      )
      collection.update(selector, update).map { le =>
        if (le.inError) {
          Json.obj("updated" -> false)
        } else {
          Json.obj("updated" -> true)
        }
      }
    }.getOrElse(Future.successful(Json.obj("updated" -> false)))
  }

}
