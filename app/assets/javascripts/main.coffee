((requirejs) ->
  "use strict"

  requirejs.config

    packages: [
      "console"
    ]
    shim:
      'jsRoutes':
        deps: [],
        exports: 'jsRoutes'

      'vendor': []
      'ui': ['vendor']
      'mainapp':['vendor','ui']

    paths:
      'vendor': ['/assets/javascripts/vendor/vendor']
      'ui': ['/assets/javascripts/vendor/angular-ui']
      'mainapp': ['/assets/javascripts/mainapp']
      jsRoutes: ["/jsroutes"]

  requirejs.onError = (err) ->
    console.log err

  require [
#    "vendor"
#    "ui"
#    "mainapp"
  ], (angular) ->
    console.log("Load vendor and mainapp js #{angular}")
  return) requirejs