###*
Console routes.
###
define [
  "angular"
  "./controllers"
], (angular, controllers) ->
  "use strict"
  routes = angular.module("console.routes",[])
  routes.config [
    "$routeProvider"
    ($routeProvider) ->
      $routeProvider
      .when "/console/",
        templateUrl: "/assets/javascripts/console/templates/index.html"
        controller: controllers.MainCtrl
      .when "/",
        redirectTo: '/console/'
      .otherwise templateUrl: "/assets/javascripts/console/templates/nFound.html"
  ]
  routes
