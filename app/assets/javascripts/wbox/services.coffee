###*
Wbox services.
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

#todo
  mod.factory "Repository", ['$http','$q', ($http,$q)->
    repo =
      list: ->

      gen: (name) ->

      del: (id) ->

      update: (id,name) ->

    repo
  ]

#todo
  mod.factory "Mask", ['$http','$q', ($http,$q)->
    mask =
      list: (repo)->

      gen: (name,title,params) ->

      del: (id) ->

      update: (id,name,title,params) ->

    mask
  ]

  mod.factory "Doc", ['$http','$q', ($http,$q)->
    doc =
      list: (repo)->

      gen: (name,title,params) ->

      del: (id) ->

      update: (id,name,title,params) ->

    doc
  ]



  mod