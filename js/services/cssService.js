define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('TabService', function() {
		var cssService = {
			loadFrontcss: function(url) {
			    var link = document.createElement("link");
			    link.type = "text/css";
			    link.rel = "stylesheet";
			    link.href = "css/front.css";
			    document.getElementsByTagName("head")[0].appendChild(link);
			}
		}

		return cssService;
	});
});