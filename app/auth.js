app.run(function($rootScope, $state, Auth, oAuth) {
	$rootScope.$on('$locationChangeStart', function(event, toUrl, fromUrl) {
		if ( $rootScope.user == undefined){
			oAuth.goLogin();
		}
	});
	
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

app.factory("oAuth", function(Auth, $rootScope, $location) {
	return {
		
		logOut: function () {
			Auth.$signOut();
			$rootScope.user = undefined;
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
	
	// @todo change remove url hardcode
	function goLogin() {
		$location.path('/login');
	}
	
	// @todo change remove url hardcode
	function goHome() {
		$location.path('/admin');
	}
	
});