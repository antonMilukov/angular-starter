'use strict';

var pagesCategories = angular.module('pagesCategories', [
	//
]);

pagesCategories. controller('categoriesListCtrl', function(Auth, $scope, $firebaseArray) {
	var ref = firebase.database().ref();
	$scope.categories = $firebaseArray(ref.child('categories'));
});