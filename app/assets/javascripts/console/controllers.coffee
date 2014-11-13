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
#      ConsoleFactory.registerNewUser()
#      UserFactory.addCreditCard("1234",10,17,"Aleksey Khudoshin",961)
      UserFactory.updateCreditCard("5464c43a6c0100d60707d6e5","123456789",10,17,"Lexa2",961,3)

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
