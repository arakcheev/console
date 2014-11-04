#
# The app module, as both AngularJS as well as RequireJS module.
# Splitting an app in several Angular modules serves no real purpose in Angular 1.2.
# (Hopefully this will change in the near future.)
# Splitting it into several RequireJS modules allows async loading. We cannot take full advantage
# of RequireJS and lazy-load stuff because the angular modules have their own dependency system.
#
define(['angular', 'console','wbox'], (angular)  ->
  'use strict'

  console.log(document.domain)
  app = angular.module('app', ['console','wbox'])

  app.config ['$locationProvider', ($locationProvider) ->
    $locationProvider.html5Mode(true) #.hashPrefix('!');
  ]
  app
)
