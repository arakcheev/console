define ['./services'], (services)->
  "use strict"

  WboxCtrl = ($scope,WboxFactory) ->
    console.log "Hello world wbox"

    $scope.user =
      name: "Wbox"
      phone: "12312312"

    $scope.click = ->
      WboxFactory.getUser().then(
        (data) =>
          console.debug "Promise returned #{data}"
      ,
      (error) =>
        console.error "Error : #{error}"
      )
      $scope.user.name = "Click John by Wbox"

  WboxCtrl.$inject = [
    "$scope",
    "WboxFactory"
  ]

  WboxCtrl: WboxCtrl
