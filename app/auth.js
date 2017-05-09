app.run(function($rootScope, $state, Auth, oAuth) {
	$rootScope.oAuth = oAuth;
	
	Auth.$onAuthStateChanged(function(firebaseUser) {
		if (firebaseUser) {
			oAuth.goHome();
			console.log("Signed in as:", firebaseUser.uid);
		} else {
			oAuth.goLogin();
			console.log("Signed out");
		}
	});
});

app.factory("Auth", function($firebaseAuth) {
	return $firebaseAuth();
});

app.factory("oAuth", function(Auth, $rootScope, $state) {
	return {
		
		logOut: function () {
			Auth.$signOut();
		},
		
		logIn: function () {
			return Auth.$signInAnonymously().then(function(firebaseUser) {
				$rootScope.user = firebaseUser;
			}).catch(function(error) {
				$rootScope.loginError = error;
			});
		},
		
		currentAuth: function () {
			return Auth.$waitForSignIn();
		},
		
		checkAuth: function (currentAuth) {
			$rootScope.user = currentAuth;
			if ( !currentAuth ){
				goLogin();
			}
		},
		
		goHome: goHome,
		
		goLogin: goLogin
	};
	
	function goLogin() {
		$state.go('login');
	}
	
	function goHome() {
		$state.go('admin.home');
	}
	
});