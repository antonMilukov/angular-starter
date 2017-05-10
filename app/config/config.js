app.config(function() {
	var CONST_FIREBASE_PARAMS = {
		apiKey: "AIzaSyCWBevwy3JUOAYa8owdxZAuCBxbGD8Gb20",
		authDomain: "challenge-chat.firebaseapp.com",
		databaseURL: "https://challenge-chat.firebaseio.com",
		storageBucket: "challenge-chat.appspot.com",
		messagingSenderId: "712100517779"
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

		