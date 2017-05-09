'use strict';

angular.module('pagesCategoriesList', [
	//
])

.controller('categoriesListCtrl', function(Auth, $scope, $firebaseArray) {
	var ref = firebase.database().ref();
	$scope.categories = $firebaseArray(ref.child('categories'));
});