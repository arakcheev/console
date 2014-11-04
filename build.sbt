import WebKeys._

import com.typesafe.sbt.rjs.Import.RjsKeys

name := """console"""

organization in ThisBuild := "com.bf"

version := "2.0.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala).dependsOn(sdk)

lazy val sdk = RootProject(uri(s"https://Arakcheev@bitbucket.org/businessframework/bf-scala-sdk-private.git#$branch"))

lazy val branch = 0.6

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  filters,
  cache,
  ws,
  "org.webjars" % "requirejs" % "2.1.14-1",
  "org.webjars" % "underscorejs" % "1.6.0-3",
  "org.webjars" % "jquery" % "1.11.1",
  "org.webjars" % "bootstrap" % "3.1.1-2" ,
  "org.webjars" % "angularjs" % "1.2.18" ,
  "org.webjars" %% "webjars-play" % "2.3.0-2"
)

scalacOptions in ThisBuild ++= Seq(
  "-target:jvm-1.7",
  "-encoding", "UTF-8",
  "-deprecation", // warning and location for usages of deprecated APIs
  "-feature", // warning and location for usages of features that should be imported explicitly
  "-unchecked", // additional warnings where generated code depends on assumptions
  "-Xlint", // recommended additional warnings
  "-Ywarn-adapted-args", // Warn if an argument list is modified to match the receiver
  "-Ywarn-value-discard", // Warn when non-Unit expression results are unused
  "-Ywarn-inaccessible",
  "-Ywarn-dead-code"
)

pipelineStages := Seq(rjs, digest, gzip)

RjsKeys.paths += ("jsRoutes" -> ("/jsroutes" -> "empty:"))

RjsKeys.paths += ("jquery" -> ("/assets/javascripts/../lib/jquery/jquery.min.js" -> "empty:"))

RjsKeys.paths += ("angular" -> ("/assets/javascripts/../lib/angularjs/angular.js" -> "empty:"))

RjsKeys.paths += ("bootstrap" -> ("/assets/javascripts/../lib/bootstrap/bootstrap.js" -> "empty:"))

RjsKeys.paths += ("underscorejs" -> ("/assets/javascripts/../lib/underscorejs/underscorejs.js" -> "empty:"))

RjsKeys.paths += ("angular-route" -> ("/assets/javascripts/../lib/angularjs/angular-route.js" -> "empty:"))

RjsKeys.paths += ("angular-cookies" -> ("/assets/javascripts/../lib/angularjs/angular-cookies.js" -> "empty:"))


//RjsKeys.mainModule := "main"

//RjsKeys.paths += ("jsRoutes" -> ("/jsroutes" -> "empty:"))
//
//emojiLogs