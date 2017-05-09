app.factory("oPage", function($state) {
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
		}
	}
});

app.run(function ($rootScope, oPage) {
	$rootScope.oPage = oPage;
})