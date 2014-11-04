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
      $routeProvider.when("/",
        templateUrl: "/assets/javascripts/console/templates/index.html"
        controller: controllers.MainCtrl
      ).otherwise templateUrl: "/assets/javascripts/console/templates/nFound.html"
  ]
  routes
