'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'pagesMain',
  'pagesUsersList'
])

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
  $locationProvider.html5Mode(true);
}]);
