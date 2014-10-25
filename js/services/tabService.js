define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('TabService', function() {
		var _scope;

		var tabService = {
			tab: 0,
			clicked: false,

		    isSet: function(checkTab) {
		      return tabService.tab === checkTab;
		    },

		    setTab: function(setTab) {
		      tabService.tab = setTab;
		    },

		    clickToggle: function(){
		    	tabService.clicked = !tabService.clicked;
		    	console.log(tabService.clicked);

		    	if (_scope){
		    		_scope.$digest();
		    	}
		    }
		};

		tabService.init = function(scope){
			_scope = scope;
			return tabService;
		}

		return tabService;
	});
});