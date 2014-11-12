package models.db

/**
 * Created by artem on 10.11.14.
 */
trait MongoDB {
  import reactivemongo.api._
  import scala.concurrent.ExecutionContext.Implicits.global

  // gets an instance of the driver
  // (creates an actor system)
  val driver = new MongoDriver
  val connection = driver.connection(List("localhost"))

  // Gets a reference to the database "plugin"
  val db = connection("bf")
}
