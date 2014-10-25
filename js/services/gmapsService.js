define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('GmapsService', function() {
		var gmapsService = {

			init_map: function(){
				var myOptions = {zoom:14,center:new google.maps.LatLng(43.674657,-79.28708540000002),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(43.674657, -79.28708540000002)});infowindow = new google.maps.InfoWindow({content:"<b>ZONE SIX DESIGN BUILD LTD</b><br/>17 Cedar Aveunue<br/> Toronto" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);
				google.maps.event.addDomListener(window, 'load', gmapsService.init_map);
			}
		}

		return gmapsService;
	});
});