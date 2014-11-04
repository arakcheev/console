define ["angular"], (angular) ->
  "use strict"
  filters = angular.module("wbox.filters", [])

  filters.filter "property", (value, property) ->
    value[property]  if value.hasOwnProperty(property)  if angular.isObject(value)


  filters