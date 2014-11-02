name := """console"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala).dependsOn(sdk)

lazy val sdk = RootProject(uri(s"https://Arakcheev@bitbucket.org/businessframework/bf-scala-sdk-private.git#$branch"))

lazy val branch = 0.5

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  ws
)
