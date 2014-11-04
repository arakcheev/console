###*
Console routes.
###
define [
  "angular"
  "./controllers"
], (angular, controllers) ->
  "use strict"
  wboxRoutes = angular.module("wbox.routes",[])
  wboxRoutes.config [
    "$routeProvider"
    ($routeProvider) ->
      $routeProvider.when("/wbox/",
        templateUrl: "/assets/javascripts/wbox/templates/index.html"
        controller: controllers.WboxCtrl
      )
  ]
  wboxRoutes
