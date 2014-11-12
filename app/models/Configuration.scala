package models

import play.api.Play
import play.api.Play.current

/**
 * Created by artem on 12.11.14.
 */
object Configuration {


  object aws {

    val id = Play.configuration.getString("aws.key.id").getOrElse(sys.error("ID is empty"))
    val secret = Play.configuration.getString("aws.key.secret").getOrElse(sys.error("secret is empty"))

  }

}
