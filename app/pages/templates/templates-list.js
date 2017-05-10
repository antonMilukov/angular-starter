'use strict';

angular.module('pagesTemplates', [
	//
])

.controller('templatesListCtrl', function(Auth, $scope, $firebaseArray) {
	var ref = firebase.database().ref();
	$scope.items = $firebaseArray(ref.child('templates'));
});