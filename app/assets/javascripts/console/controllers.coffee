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
      ConsoleFactory.registerNewUser()
      ConsoleFactory.getUser().then(
        (data) =>
          console.debug "Promise returned #{data}"
      ,
      (error) =>
        console.error "Error : #{error}"
      )
      $scope.user.name = "Click John"

    $scope.signin = ->
      UserFactory.signin("artem.ft2@gmail.com","1234")

    $scope.logout = ->
      UserFactory.logout()

  MainCtrl.$inject = [
    "$scope",
    "ConsoleFactory",
    "UserFactory"
  ]

  MainCtrl: MainCtrl
