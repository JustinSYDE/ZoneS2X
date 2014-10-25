//COLLAGECTRL CAN BE USED ACROSS PAGES LIKE softscape-residentail.html 

define(["controllersFactory", 
	'services/tabService',
	'directives/directives'], 

	function(controllersFactory) {

		controllersFactory.controller('CollageCtrl', 
			['$scope', 
			'TabService',

			function($scope, 
				tabService) {

				$scope.tabService = tabService;
		}]);
});