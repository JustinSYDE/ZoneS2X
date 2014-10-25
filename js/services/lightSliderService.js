define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('LightSliderService', function() {
		var lightSlider = {
			start: function(){
				$(document).ready(function() {
				    $("#lightSlider").lightSlider(); 

				    var site = $('#site');
				            
				    $(document).ready(function() {
				        $('#lightSlider').lightSlider({
				            minSlide:1,
				            maxSlide:1,
				            keyPress:false,
				            speed:1000,
				            auto:true,
				            controls:false,
				            onSliderLoad: function() {
				                $('#content-slider').removeClass('cS-hidden');
				            } 
				        });
				    });
				});
			}
		};

		return lightSlider;
	});
});