'use strict';

pagesCategories. controller('categoriesEditCtrl', function($scope, $firebaseObject, $stateParams) {
	var ref = firebase.database().ref();
	var categoryId = $stateParams.categoryId || undefined;
	if (categoryId){
		$scope.item = $firebaseObject(ref.child('categories/' + categoryId));
	}
});