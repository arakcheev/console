package controllers

import akka.actor.Actor.Receive
import akka.actor.{ActorRef, Actor, Props, actorRef2Scala}
import akka.pattern.ask
import akka.util.Timeout
import models.entities.{Comment, User, CommentActor}
import play.api.Logger
import play.api.Play.current
import play.api.libs.concurrent.Akka
import play.api.libs.iteratee._
import play.api.libs.json._
import play.api.mvc._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.language.postfixOps
import scala.util.{Success, Failure}

/**
 * Created by artem on 14.11.14.
 */
object CommentControl extends JsonSerializerController {

  //  def ex = Action{ implicit request =>
  //    Ok
  //  }

  //  def socket = WebSocket.tryAcceptWithActor[JsValue, JsValue] { request =>
  //    User.fromRequest(request).map {
  //      case None => Left(Forbidden)
  //      case Some(user) => {
  //        implicit val u = user
  //        Right(CommentActor.props _)
  //      }
  //    }
  //  }

  implicit val timeout = Timeout(10000l)
  val room = Akka.system.actorOf(Props[DocRoom])

  case class Join(user: String)

  case class Leave(user: String)

  case class Broadcast(js: JsValue)

  class DocRoom extends Actor {
    var users = Set[String]()
    val (enumerator, channel) = Concurrent.broadcast[JsValue]

    def receive = {
      case Join(user) => {
        if (!users.contains(user)) {
          val iteratee = Iteratee.foreach[JsValue] { js =>
            self ! Broadcast(JsString("Hello from itee"))
          }
          users += user
          channel.push(JsString("Hello2 from push")) //push all commets
          sender !(iteratee, enumerator)
        } else {
          val enumerator = Enumerator(JsString("Error"))
          val iteratee = Iteratee.ignore
          sender !(iteratee, enumerator)
        }
      }
      case Broadcast(js: JsValue) => channel.push(js)
    }

  }

  class RoomsActor extends Actor {
    def receive: Receive = {
      case id: String =>
        Akka.system.actorSelection(id).resolveOne().map { ref =>
          ref ? Join(id)
        }.andThen {
          case Failure(t) =>
            val newRoom = Akka.system.actorOf(Props[DocRoom], id)
            Logger.logger.debug(s"$newRoom")
            newRoom ? Join(id)
          case Success(v) =>
            Logger.logger.debug(v.toString)
        }
    }
  }

  //  val rooms = Akka.system.actorOf(Props[RoomsActor], "RoomsActor")
  //
  //  def socket = WebSocket.tryAccept[JsValue] { implicit request =>
  //    User.fromRequest(request).flatMap {
  //      case None =>
  //        Future(Left(Forbidden("")))
  //      case Some(user) =>
  //        val s = rooms ? request.getQueryString("id").getOrElse("")
  //        val channelsFuture = room ? Join(user.id.get.stringify)
  //        s.mapTo[(Iteratee[JsValue, _], Enumerator[JsValue])].map(Right(_))
  //    }
  //  }

//  val (out, channel) = Concurrent.broadcast[String] // яля room

  var rooms = Set[(Enumerator[String], Concurrent.Channel[String],String)]()

  def room(request: RequestHeader) = {
    request.getQueryString("id") match {
      case Some(id) =>
        Logger.logger.debug(rooms+"")
        rooms.find(_._3 == id) match {
          case Some(roomm) =>
            Logger.logger.debug(roomm+" this is rooms set and id "+id)
            (roomm._1,roomm._2)
          case None =>
            val newRoom = Concurrent.broadcast[String]
            rooms = rooms.+((newRoom._1,newRoom._2,id))
            Logger.logger.debug(newRoom+" this is new room")
            (newRoom._1,newRoom._2)
        }
      case None =>
        //todo Must send bad request, du to query string does not contains 'id'
        Input.EOF
        val newRoom = Concurrent.broadcast[String]
        rooms.+((newRoom._1,newRoom._2,"asdasd"))
        (newRoom._1,newRoom._2)
    }
  }

  def socket = WebSocket.using[String] { request =>

    val (out, channel) = room(request)

    Logger.logger.debug(out+"")


    val enumerateUsers: Enumerator[String] = {
      Enumerator("Guillaume", "Sadek", "Peter", "Erwan")
    }
    val consume = Iteratee.consume[String]()

    val iteratee = Iteratee.foreach[String](msg =>
      channel.push(msg)
    )

    (iteratee, out)
  }

}
