###*
Console services.
###
define [
  "angular"
], (angular) ->
  "use strict"
  mod = angular.module('console.factory', []);
  mod.factory "ConsoleFactory", ['$http','$q', ($http,$q)->
    obj =
      getUser:  ->
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

  mod.factory "UserFactory",['$http','$q', ($http,$q)->
    obj =
      signin: (email ="",password)->
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

      getProfile : ->
        deferred = $q.defer()
        $http.get(jsRoutes.controllers.AccountControl.profile().url)
        .success((data, status, headers) =>
          deferred.resolve(data)
        )
        .error((data, status, headers) =>
          console.log(data.result[1])
          if(data.result[1].status == 300)
            window.location.replace("/login")

          deferred.reject(data);
        )
        deferred.promise
    obj
  ]
  mod