'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ui.router',
	'firebase',
  'pagesHome',
  'pagesUsersList',
  'pagesLogin',
	'pagesCategories',
	'pagesTasks',
	'pagesTemplates'
  
]);