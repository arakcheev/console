###*
Console services.
###
define [
  "angular"
], (angular) ->
  "use strict"
  mod = angular.module('wbox.factory', []);
  mod.factory "WboxFactory", ['$http','$q', ($http,$q)->
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