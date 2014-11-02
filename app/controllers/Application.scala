package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {

  def index = Action {
    import com.bf.sdk.Main._

    saveRepo
    Ok(views.html.index("Your new application is ready."))
  }

}