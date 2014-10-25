define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('SlippryService', function() {
		var slippryService = {
			start: function(){
				$("#demo1").slippry({
	                transition: 'fade',
	                useCSS: true,
	                speed: 1000,
	                pause: 3000,
	                auto: true,
	                preload: 'visible'
	            });
			}
		};

		return slippryService;
	});
});

