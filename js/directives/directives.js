//MAIN DIRECTIVE FOR MAIN TEMPLATE HTML

define(['directivesFactory'], function(directivesFactory){

	directivesFactory.directive('navbar', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/partials/navbar.html"
		};
	});

	directivesFactory.directive('zoneSixFooter', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/partials/zone-six-footer.html"
		};
	});
});