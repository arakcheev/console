define ["angular"], (angular) ->
  "use strict"
  dirs = angular.module("wbox.directives", [])
  dirs.directive "example", [
    "$log"
    ($log) ->
      return (
        restrict: "AE"
        link: -> #scope, el, attrs
          $log.info "Directive"
          return
      )
  ]
  dirs
