###*
Console controllers.
###
define ['./services'], (services)->
  "use strict"

  ###*
  Controls the index page
  ###
  MainCtrl = ($scope,ConsoleFactory,UserFactory) ->

    $scope.user =
      name: "John"
      phone: "12312312"


    $scope.click = ->
      UserFactory.getProfile()
      UserFactory.changePassword("1234","123456")

    $scope.signin = ->
      UserFactory.signin("artem.ft2@gmail.com","123456")

    $scope.logout = ->
      UserFactory.logout()

  MainCtrl.$inject = [
    "$scope",
    "ConsoleFactory",
    "UserFactory"
  ]

  MainCtrl: MainCtrl
