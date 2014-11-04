###*
Console controllers.
###
define ['./services'], (services)->
  "use strict"

  ###*
  Controls the index page
  ###
  MainCtrl = ($scope,ConsoleFactory) ->
    console.log "Hello world"

    $scope.user =
      name: "John"
      phone: "12312312"

    $scope.click = ->
      ConsoleFactory.getUser().then(
        (data) =>
          console.debug "Promise returned #{data}"
      ,
      (error) =>
        console.error "Error : #{error}"
      )
      $scope.user.name = "Click John"

  MainCtrl.$inject = [
    "$scope",
    "ConsoleFactory"
  ]

  MainCtrl: MainCtrl
