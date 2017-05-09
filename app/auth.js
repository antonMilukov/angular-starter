app.run(function($rootScope, Auth, oAuth) {
	
	/** catch auth error and redirect to login page*/
	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
		if (error === "AUTH_REQUIRED") {
			oAuth.goLogin();
		}
	});
	
	$rootScope.oAuth = oAuth;
	
	// track status of authentication
	Auth.$onAuthStateChanged(function(user) {
		var loggedIn = !!user;
		if (!loggedIn) {
			oAuth.goLogin();
		}
		$rootScope.user = user;
	});
});


app.factory("Auth", function($firebaseAuth) {
	return $firebaseAuth();
});

app.factory("oAuth", function(Auth, $rootScope, $location, $state) {
	return {
		
		logOut: function () {
			Auth.$signOut();
			$rootScope.user = undefined;
		},
		
		logIn: function () {
			return Auth.$signInAnonymously().then(function(firebaseUser) {
				$rootScope.user = firebaseUser;
				goHome();
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
	
	// @todo change remove url hardcode
	function goLogin() {
		$location.path('/login');
	}
	
	// @todo change remove url hardcode
	function goHome() {
		$location.path('/admin/');
	}
	
});