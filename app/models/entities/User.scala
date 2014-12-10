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

package models.entities

import java.io.File

import models.SecureGen
import models.db.{MongoConnection, MongoDB}
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
 * @author Artem Arakcheev
 * @since 10.11.14
 */

case class User(var id: Option[BSONObjectID], var uuid: Option[String], var email: Option[String],
                var password: Option[String], var avatar: Option[String], var status: Option[Int], var revision: Option[Int],
                var date: Option[Long], var info: Option[BSONDocument]) {

  def getAccountAsJson = {
    /*account.map { doc =>
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
    }.getOrElse(Json.obj())*/
    ???
  }


  def getCreditCardsAsJson = {
    /* Json.toJson(creditCards.map { array =>
       array.values.map { doc =>
         val bsonDoc = doc.seeAsOpt[BSONDocument].getOrElse(BSONDocument.empty)
         Json.obj(
           "id" -> bsonDoc.getAs[BSONObjectID]("_id").map(_.stringify),
           "status" -> bsonDoc.getAs[Int]("status"),
           "number" -> bsonDoc.getAs[String]("number"),
           "validM" -> bsonDoc.getAs[Int]("validM"),
           "validY" -> bsonDoc.getAs[Int]("validY"),
           "name" -> bsonDoc.getAs[String]("name")
         )
       }.toList
     }.getOrElse(Nil))*/
    ???
  }

}

object User extends Entity {

  import reactivemongo.api.collections.default.BSONCollection

  val collection = MongoConnection.db.collection[BSONCollection]("user")

  val COOKIE_EMAIL = "u_e"

  val COOKIE_AUTH = "u_a"

  /** Create empty user */
  def empty() = User(Some(BSONObjectID.generate), Some(SecureGen.nextSessionId()), None, None, None, None, None, None, None)

  /** Gen new user by email and password */
  def gen(email: String, password: String) = {
    val user = empty()
    user.email = Some(email)
    user.password = Some(Crypto.encryptAES(password))
    insert(user)(UserWriter)
  }

  /

  implicit object UserWriter extends BSONDocumentWriter[User] {
    def write(user: User): BSONDocument = {
      BSONDocument(
        "_id" -> user.id,
        "uuid" -> user.uuid.getOrElse(""),
        "email" -> user.email.getOrElse(""),
        "password" -> user.password.getOrElse(""),
        "avatar" -> user.avatar,
        "status" -> user.status,
        "revision" -> user.revision,
        "date" -> user.date.map(BSONDateTime.apply),
        "info" -> user.info
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
        doc.getAs[String]("avatar"),
        doc.getAs[Int]("status"),
        doc.getAs[Int]("revision"),
        doc.getAs[BSONDateTime]("date").map(_.value),
        doc.getAs[BSONDocument]("info")
      )
    }
  }

  /** Register new user by email and password */
  def reg(email: String, password: String) = {
    byEmail(Some(email)).flatMap {
      case Some(user) =>
        Future.successful(None)
      case None =>
        gen(email, password)
    }
  }

  def byEmail(email: Option[String]) = {
    collection.find(BSONDocument(
      "email" -> email
    )).one[User]
  }

  /** Find user by ObjectId */
  def byId(id: BSONObjectID) = {
    collection.find(BSONDocument(
      "_id" -> id
    )).one[User]
  }

  /** Find user by uuid with max revision */
  def byUUID(uuid: Option[String]) = {
    collection.find(BSONDocument(
      "uuid" -> uuid
    )).sort(BSONDocument("revision" -> -1)).one[User]
  }

  /**
   * Private method to authenticate crypto passwrod of user
   * @param user - user model
   * @param password - uncripted password
   * @return Future[Boolean]
   */
  private def auth(user: User, password: Option[String]) = if (user.password.filter(_ == Crypto.encryptAES(password.get)).isDefined) Some(user) else None ////todo Crypto with shared key


  /**
   * Authenticate user by email and passwrod
   * @param email user email
   * @param password user uncripted password
   * @return
   */
  def authenticate(email: Option[String], password: Option[String]) = {
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
  def authenticate(request: RequestHeader, email: Option[String], password: Option[String]) = {
    byUUID(request.cookies.get(COOKIE_EMAIL).map(_.value)).map {
      case Some(user) => auth(user, password)
      case None => None
    }
  }

  /** Gen user from request */
  def fromRequest(request: RequestHeader) = byUUID(request.cookies.get(COOKIE_AUTH).map(_.value))


  //todo????
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

  /**
   * Add new credit card
   * @param user
   * @param number
   * @param validM
   * @param validY
   * @param name
   * @param cv2
   * @return
   */
  def addCreditCard(user: User, number: String, validM: Int, validY: Int, name: String, cv2: Int) = {
    val selector = BSONDocument("_id" -> user.id.get)
    val update = BSONDocument(
      "$addToSet" -> BSONDocument(
        "creditCards" -> BSONDocument(
          "_id" -> BSONObjectID.generate,
          "status" -> BSONInteger(0),
          "number" -> number,
          "validM" -> BSONInteger(validM),
          "validY" -> BSONInteger(validY),
          "name" -> name,
          "cv2" -> BSONInteger(cv2)
        )
      )
    )
    collection.update(selector, update)
  }

  /**
   * Update credit card
   * @param cardId card id
   * @param number new number
   * @param validM new valid month
   * @param validY new valid year
   * @param name new cardholder name
   * @param cv2 new cv2 code
   * @param status new status of card
   * @return
   */
  def updateCreditCard(cardId: String, number: String, validM: Int, validY: Int, name: String, cv2: Int, status: Int) = {
    val selector = BSONDocument("creditCards" -> BSONDocument("$elemMatch" -> BSONDocument("_id" -> BSONObjectID(cardId))))
    val update = BSONDocument(
      "$set" -> BSONDocument(
        "creditCards.$.status" -> BSONInteger(status),
        "creditCards.$.number" -> number,
        "creditCards.$.validM" -> BSONInteger(validM),
        "creditCards.$.validY" -> BSONInteger(validY),
        "creditCards.$.name" -> name,
        "creditCards.$.cv2" -> BSONInteger(cv2)
      )
    )

    collection.update(selector, update)
  }

}
