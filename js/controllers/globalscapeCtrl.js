//GLOBALSCAPECTRL CAN BE USED ACROSS PAGES LIKE hardscape.html OR softscape.HTML

define(["controllersFactory", 
	'services/tabService',
	'services/slippryService',
	'directives/directives'], 

	function(controllersFactory) {

		controllersFactory.controller('GlobalscapeCtrl', 
			['$scope', 
			'TabService',
			'SlippryService',

			function($scope, 
				tabService,
				slippryService) {

				$scope.tabService = tabService;
				$scope.slippryService = slippryService;

				$scope.slippryService.start();
		}]);
});