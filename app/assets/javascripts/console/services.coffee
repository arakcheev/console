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

      registerNewUser: ->
        deferred = $q.defer()
        $http.post(jsRoutes.controllers.Registration.signup().url,
          "email": "artem.ft2@gmail.com"
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

      updateCreditCard: (id,number, validM, validY, name, cv2,status) ->
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
  mod