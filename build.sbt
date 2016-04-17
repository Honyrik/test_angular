name := """work_later_pay"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  javaCore,
  javaJdbc,
  cache,
  javaWs,
  "org.postgresql" % "postgresql" % "9.4.1208.jre7",
  jdbc
)

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator

sourceDirectories in TwirlKeys.compileTemplates in Compile ++= Seq(baseDirectory.value / "ui/src")
watchSources <++= baseDirectory map { path => ((path / "ui/src") ** "*.scala.*").get }