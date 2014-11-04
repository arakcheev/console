define [
  "angular"
  "./routes"
  "./controllers"
  "./services"
  "./filters"
  "./directives"
], (angular,routes,controllers,services,filters) ->
  "use strict"
  console = angular.module("console", [
    "ngRoute"
    "console.routes",
    "console.factory",
    "console.filters",
    "console.directives"
  ])

  console.controller('MainCtrl', controllers.MainCtrl);

  console