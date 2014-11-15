###*
Console services.
###
define [
  "angular"
], (angular) ->
  "use strict"
  mod = angular.module('console.factory', []);
  mod.factory "ConsoleFactory", ['$http', '$q', ($http, $q)->
    obj =
      getUser: ->
        deferred = $q.defer()
        $http.get("/user")
        .success((data, status, headers) =>
          console.info("Get user")
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          console.error("Failed to get user")
          deferred.reject(data);
        )
        deferred.promise

      registerNewUser: (email)->
        deferred = $q.defer()
        $http.post(jsRoutes.controllers.Registration.signup().url,
          "email": email
          "password": "1234").success((data, status, headers) =>
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          console.error("Failed to get user")
          console.log(data)
          deferred.reject(data);
        )

    obj
  ]

  mod.factory "UserFactory", ['$http', '$q', ($http, $q)->
    obj =
      signin: (email = "", password)->
        deferred = $q.defer()
        $http.post(jsRoutes.controllers.Registration.signin().url,
          "email": email
          "password": password)
        .success((data, status, headers) =>
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          deferred.reject(data);
        )
        deferred.promise

      logout: ->
        $http.get(jsRoutes.controllers.Registration.logout().url)
        .success((data, status, headers) =>
          window.location.reload()
        )
        .error((data, status, headers) =>
          console.log("error logout")
        )

      getProfile: ->
        deferred = $q.defer()
        $http.get(jsRoutes.controllers.AccountControl.account().url)
        .success((data, status, headers) =>
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          console.log(data.result[1])
          #          if(data.result[1].status == 300)
          #            window.location.replace("/login")

          deferred.reject(data);
        )
        deferred.promise

      update: (name, value)->
        deferred = $q.defer()
        $http.post(jsRoutes.controllers.AccountControl.update().url,
          "name": name
          "value": value)
        .success((data, status, headers) =>
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          console.log(data.result[1])
          #          if(data.result[1].status == 300)
          #            window.location.replace("/login")

          deferred.reject(data);
        )
        deferred.promise

      changePassword: (oldp, newp) ->
        deferred = $q.defer()
        $http.post(jsRoutes.controllers.AccountControl.changePassword().url,
          "oldPassword": oldp
          "newPassword": newp)
        .success((data, status, headers) =>
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          console.log(data.result[1])
          deferred.reject(data);
        )
        deferred.promise

      addCreditCard: (number, validM, validY, name, cv2) ->
        deferred = $q.defer()
        $http.post(jsRoutes.controllers.AccountControl.addCreditCard().url,
          "number": number
          "validM": validM
          "validY": validY
          "name": name
          "cv2": cv2)
        .success((data, status, headers) =>
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          console.log(data.result[1])
          deferred.reject(data);
        )
        deferred.promise

      updateCreditCard: (id, number, validM, validY, name, cv2, status) ->
        deferred = $q.defer()
        $http.post(jsRoutes.controllers.AccountControl.updateCreditCard(id).url,
          "number": number
          "validM": validM
          "validY": validY
          "name": name
          "cv2": cv2
          "status": status)
        .success((data, status, headers) =>
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          console.log(data.result[1])
          deferred.reject(data);
        )
        deferred.promise
    obj
  ]

  mod.factory "TaskFactory", ['$http', '$q', ($http, $q)->
    obj =
      newTask: (name, fromDate, toDate, touser = "", system = "", docType = "", docID = "")->
        deferred = $q.defer()
        $http.post(jsRoutes.controllers.TaskControl.newTask().url,
          "name": name
          "fromDate": fromDate
          "toDate": toDate
          "touser": touser
          "system": system
          "docType": docType,
          "docID": docID)
        .success((data, status, headers) =>
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          console.log(data.result[1])
          deferred.reject(data);
        )
        deferred.promise

      list: ->
        deferred = $q.defer()
        $http.get(jsRoutes.controllers.TaskControl.list().url)
        .success((data, status, headers) =>
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          console.log(data.result[1])
          deferred.reject(data);
        )
        deferred.promise
    obj
  ]

  class Comment
    constructor: (text, system, docType, docId)->
      @text = text
      @system = system
      @docType = docType
      @docID = docId

    asJson: ->
      JSON.stringify(
        "text": @text
        "system": @system
        "docType": @docType
        "docId": @docID
      )

  class CommentService
    constructor: ($q) ->
      socket = new WebSocket(jsRoutes.controllers.CommentControl.socket().webSocketURL()+"?id=docID")
      deferred = $q.defer()
      socket.onopen = ->
        deferred.resolve(socket)
      socket.onclose = ->
        deferred.reject(socket)
      @socket = deferred.promise

    onmessage: (callback) ->
      @socket.then((s)->
        s.onmessage = (event) ->
          callback.call(@,event)
      ,
        (reason) ->
          console.log(reason)
      )

    send: (comment) ->
      @socket.then((s)->
        s.send("this is comment #{new Date()}")
      ,
        (reason) ->
          console.log(reason)
      )

  mod.service "CommentService", ['$q', CommentService]

  mod