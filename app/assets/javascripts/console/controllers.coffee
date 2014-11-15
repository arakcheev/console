###*
Console controllers.
###
define ['./services'], (services)->
  "use strict"

  ###*
  Controls the index page
  ###
  MainCtrl = ($scope, ConsoleFactory, UserFactory, TaskFactory, CommentService) ->
    $scope.user =
      name: "John"
      phone: "12312312"

    comment = CommentService
    comment.onmessage (event) ->
      console.log(event.data)
#


    $scope.click = ->
#      ConsoleFactory.registerNewUser()
#      UserFactory.addCreditCard("1234",10,17,"Aleksey Khudoshin",961)
      UserFactory.updateCreditCard("5464c43a6c0100d60707d6e5", "123456789", 10, 17, "Lexa2", 961, 3)

    $scope.newUser = ->
      ConsoleFactory.registerNewUser("artem2.ft@gmail.com")

    $scope.signin = ->
      UserFactory.signin("artem2.ft@gmail.com", "1234")

    $scope.newTask = ->
      TaskFactory.newTask("New task", new Date().getTime() * 1000 + 1000, new Date().getTime() * 1000 + 2000, "", "",
        "", "")

    $scope.tasks = ->
      TaskFactory.list()

    $scope.logout = ->
      UserFactory.logout()

    $scope.newComment = ->
      comment.send( JSON.stringify(
        "text": "text"
        "system": "system"
        "docType": "docType"
        "docId": "docID"
      ))

  MainCtrl.$inject = [
    "$scope"
    "ConsoleFactory"
    "UserFactory"
    "TaskFactory"
    "CommentService"
  ]

  MainCtrl: MainCtrl
