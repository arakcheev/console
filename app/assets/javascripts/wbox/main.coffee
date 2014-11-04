define [
  "angular"
  "./routes"
  "./controllers"
  "./services"
  "./filters"
  "./directives"
], (angular,routes,controllers,services,filters) ->
  "use strict"
  wbox = angular.module("wbox", [
    "ngRoute"
    "wbox.routes",
    "wbox.factory",
    "wbox.filters",
    "wbox.directives"
  ])

  wbox.controller('WboxCtrl', controllers.WboxCtrl);

  wbox