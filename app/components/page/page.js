app.factory("oPage", function($state, $location) {
	return {
		getTitle: function () {
			var result = '...';
			try {
				result = $state.current.data.title;
			} catch (e){}
			
			return result;
		},
		
		closeModal: function () {
			var modal = $(".mb-control-close");
			if (modal.length > 0){
				modal.trigger('click');
			}
		},
		
		getDate: function (format) {
			var format = format || 'MMMM Do YYYY, h:mm:ss a';
			return moment().format(format);
		},
		
		go: function (url) {
			$location.path(url);
		}
	}
});

app.run(function ($rootScope, oPage) {
	$rootScope.oPage = oPage;
})