define(["controllersFactory", 
	'services/tabService',
	'services/gmapsService',
	'services/verticalTimelineService',
	'directives/directives'], 

	function(controllersFactory) {

		controllersFactory.controller('AboutCtrl', 
			['$scope', 
			'TabService',
			'GmapsService',
			'VerticalTimelineService',

			function($scope, 
				tabService,
				gmapsService,
				verticalTimelineService) {

				$scope.tabService = tabService;
				$scope.gmapsService = gmapsService;
				$scope.verticalTimelineService = verticalTimelineService;

				$scope.verticalTimelineService.start();
				$scope.gmapsService.init_map();
		}]);
});