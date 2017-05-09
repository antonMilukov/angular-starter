app.config(function() {
	var CONST_FIREBASE_PARAMS = {
		apiKey: "AIzaSyAfjyzHjLx_8wJ31MwKGdktcL8bWXTj3L8",
		authDomain: "angular-9df3c.firebaseapp.com",
		databaseURL: "https://angular-9df3c.firebaseio.com",
		storageBucket: "gs://angular-9df3c.appspot.com/",
		messagingSenderId: "15526884962"
	};
	
	firebase.initializeApp(CONST_FIREBASE_PARAMS);
});

app.factory("CONSTS", function($rootScope) {
	return {
		'templatePath': 'assets/joli/'
	}
});

app.run(function ($rootScope, CONSTS) {
	$rootScope.CONSTS = CONSTS;
})

		