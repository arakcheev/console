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

    obj
  ]
  mod