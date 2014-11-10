((requirejs) ->
  "use strict"

  # -- RequireJS config --
  requirejs.config

  # Packages = top-level folders; loads a contained file named 'main.js"
    packages: [
      "console"
      "wbox"
    ]
    shim:
      'jsRoutes':
        deps: [],
        exports: 'jsRoutes'

      'angular':
        deps: ['jquery'],
        exports: 'angular'

      'angular-route': ['angular'],
      'angular-cookies': ['angular'],
      'bootstrap': ['jquery']

    paths:
      jquery: ["../lib/jquery/jquery"]
      angular: ["../lib/angularjs/angular"]
      "angular-route" : ["../lib/angularjs/angular-route"]
      "angular-cookies" : ["../lib/angularjs/angular-cookies"]
      bootstrap: ["../lib/bootstrap/js/bootstrap"]
      jsRoutes: ["/jsroutes"]

  requirejs.onError = (err) ->
    console.log err


  # Load the app. This is kept minimal so it doesn't need much updating.
  require [
    "angular"
    "angular-cookies"
    "angular-route"
    "jquery"
    "bootstrap"
    "./app"
    "jsRoutes"
  ], (angular) ->
    angular.bootstrap document, ["app"]



) requirejs