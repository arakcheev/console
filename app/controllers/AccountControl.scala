package controllers

import models.entities.User
import play.api.libs.functional.syntax._
import play.api.libs.json.Reads._
import play.api.libs.json._
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by artem on 10.11.14.
 */
object AccountControl extends JsonSerializerController with Secured {


  /**
   * Get user account as json
   * @return
   */
  def account = Auth.auth(parse.empty) { user => implicit request =>
    ok(user.getAccountAsJson)("getProfile")
  }

  /**
   * Update account info. Post request with JSON body: {"name":"attr name","value": "attr value"}
   * @return
   */
  def update = Auth.async(parse.tolerantJson) { user => implicit request =>
    implicit val method = "updateAccount"
    val name = request.body.\("name").as[String]
    val value = request.body.\("value").as[String]
    User.setAccountValue(user.id.get.stringify, name, value).map { le =>
      ok(Json.obj("updated" -> true))
    }.recover(recover)
  }

  def uploadFile = Auth.async(parse.multipartFormData) { user => implicit request =>
    implicit val method = "uploadAccountFile"
    request.body.file("file") match {
      case Some(file) =>
        User.uploadFile(user, file.ref.file).map { result =>
          ok(Json.obj("file" -> result._1))
        }.recover(recover)
      case None => futureBad("Error uploading file")
    }
  }

  /**
   * Change user password. POST request with json {newPassword: "123456", oldPassword: "1234"}
   * @return
   */
  def changePassword = Auth.async(parse.tolerantJson) { user => implicit request =>
    implicit val method = "changePassword"
    val newPassword = request.body.\("newPassword").as[String]
    val oldPassword = request.body.\("oldPassword").as[String]
    User.changePassword(user, newPassword, oldPassword).map { js =>
      ok(js)
    }
  }

  /**
   * Add new credit card. see [[CreditCardJson]]
   * @return
   */
  def addCreditCard = Auth.async(parse.tolerantJson) { user => implicit request =>
    implicit val method = "addCreditCard"
    request.body.validate(CreditCardJson) match {
      case c: JsSuccess[CreditCard] =>
        val card = c.get
        User.addCreditCard(user, card.number, card.validM, card.validY, card.name, card.cv2).map { le =>
          ok(Json.obj())
        }
      case JsError(error) =>
        futureBad("Error parse json")
    }
  }

  def getCreditCards = Auth.auth(parse.empty) { user => implicit request =>
    ok(user.getCreditCardsAsJson)("getCreditCards")
  }

  /**
   *
   * @param id credit card id
   * @return
   */
  def updateCreditCard(id: String) = Auth.async(parse.tolerantJson) { user => implicit request =>
    implicit val method = "updateCreditCard"
    request.body.validate(CreditCardJson) match {
      case c: JsSuccess[CreditCard] =>
        val card = c.get
        User.updateCreditCard(id, card.number, card.validM, card.validY, card.name, card.cv2, card.status.getOrElse(0)).map { le =>
          ok(Json.obj())
        }
      case JsError(error) =>
        futureBad("Error parse json")
    }
  }


  /** Used for obtaining the CreditCard from http JSON request */
  case class CreditCard(number: String, validM: Int, validY: Int, name: String, cv2: Int, status: Option[Int])

  /** JSON reader for [[CreditCard]]. */
  implicit val CreditCardJson = (
    (__ \ "number").read[String](maxLength[String](16)) ~
      (__ \ "validM").read[Int] ~
      (__ \ "validY").read[Int] ~
      (__ \ "name").read[String] ~
      (__ \ "cv2").read[Int] ~
      (__ \ "status").readNullable[Int]
    )((number, validM, validY, name, cv2, status) => CreditCard(number, validM, validY, name, cv2, status))

}
