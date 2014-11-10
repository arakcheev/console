package models

import play.api.libs.json.{Json, JsValue, Writes}

/**
 * Created by artem on 10.11.14.
 */

case class Error(code: Int, message: String)

object Errors {

  implicit val errorWrites = new Writes[Error] {
    def writes(e: Error): JsValue = Json.obj(
      "code" -> e.code,
      "message" -> e.message
    )
  }


}
