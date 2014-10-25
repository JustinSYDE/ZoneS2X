//MAIN JAVASCRIPT FILE WHERE THE COORDINATION OF THE MAIN CONTROLLERS, SERVICES AND DIRECTIVES ARE CONFIGURED
//THIS FILE SERVES AS A CONTROL PANEL FOR THE WEB APP
//THIS FILE IS THE FIRST JAVASCRIPT FILE THAT IS LOADED AND CONTROLS THE INITIALALIZATION FLOW OF THE REST OF THE WEB APP

(function() {

	'use strict';

	//CONFIGURE THE LIBRARIES TO BE USED 
	//ASSIGN NAME ALIAS FOR DIRECTORIES AND INDICATE THEIR DIRECTORIES
	require.config({
		baseUrl: 'js',
		paths: {
			'angular': 'libs/angular-1.2.24',
			'angularRoute': 'libs/angular-route-1.2.24',
			'bootstrap': 'libs/modernizr-2.6.2-respond-1.1.0.min',
			'jquery': 'libs/jquery',
			'bootstrapJS': 'libs/bootstrap',
			'lightSlider': 'libs/jquery.lightSlider',
			'async': 'libs/async',
			'slippry': 'libs/slippry',
		},
		shim: {
			'angular': {
				exports: 'angular'
			},
			'angularRoute': {
				deps: ['angular']
			},
			'jquery': {
				exports: '$'
			},
			'bootstrapJS': {
				deps: ['jquery']
			},
			'lightSlider': {
				deps: ['jquery']
			},
			'verticalTimeline': {
				deps: ['jquery']
			},
			'slippry': {
				deps: ['jquery']
			},
		}
	});

	//DEFINE THE MAIN MODULES TO BE LOADED 
	define('controllersFactory', ['angular'], function(angular) {
		return angular.module('app.controllers', []);
	});

	define('servicesFactory', ['angular'], function(angular) {
		return angular.module('app.services', []);
	});

	define('directivesFactory', ['angular'], function(angular) {
		return angular.module('app.directives', []);
	});

	//use plugins as if they were at baseUrl
	define('gmaps', ['async!http://maps.google.com/maps/api/js?sensor=false'], function(){
	        //all dependencies are loaded (including gmaps and other google apis)
		return window.google.maps; 
	});


	//DEFINE THE MOTHER 'APP' MODULE WHICH REQUIRES ALL THE OTHER MAIN MODULES TO BE INITIALIZED WITH IT
	define('app', [
		'angular',
		'angularRoute',
		'servicesFactory',
		'controllersFactory',
		'directivesFactory'
		],
		function(angular) {
			return angular.module('app', ['app.services', 'app.controllers', 'app.directives', 'ngRoute']);
		}
	);

	//BOOTSTRAP ANGULARJS TO THE MOTHER 'APP'
	require(['app', 
		'jquery', 
		'bootstrap', 
		'bootstrapJS', 
		'lightSlider', 
		'gmaps',
		'slippry'
		], 

		function(app, 
			jquery, 
			bootstrap, 
			bootstrapJS, 
			lightSlider, 
			gmaps,
			slippry) {

		require([
				'controllers/frontCtrl',
				'controllers/aboutCtrl',
				'controllers/globalscapeCtrl',
				'controllers/collageCtrl',
			],

			function() {
				app.config(['$routeProvider', function($routeProvider) {
					$routeProvider
						.when('/', {templateUrl: 'templates/frontPage/front.html', controller: "FrontCtrl"}).
						otherwise({redirectTo: '/'})

						.when('/about', {templateUrl: 'templates/aboutPage/about.html', controller: "AboutCtrl"}).
						otherwise({redirectTo: '/'})

						.when('/softscape', {templateUrl: 'templates/softscapePages/softscape.html', controller: "GlobalscapeCtrl"}).
						otherwise({redirectTo: '/'})

						.when('/hardscape', {templateUrl: 'templates/hardscapePages/hardscape.html', controller: "GlobalscapeCtrl"}).
						otherwise({redirectTo: '/'})

						.when('/softscape-commercial', {templateUrl: 'templates/softscapePages/softscape-commercial.html', controller: "CollageCtrl"}).
						otherwise({redirectTo: '/'})

						.when('/softscape-residential', {templateUrl: 'templates/softscapePages/softscape-residential.html', controller: "CollageCtrl"}).
						otherwise({redirectTo: '/'})

						.when('/hardscape-commercial', {templateUrl: 'templates/hardscapePages/hardscape-commercial.html', controller: "CollageCtrl"}).
						otherwise({redirectTo: '/'})

						.when('/hardscape-residential', {templateUrl: 'templates/hardscapePages/hardscape-residential.html', controller: "CollageCtrl"}).
						otherwise({redirectTo: '/'})

						.when('/specialties-stonework', {templateUrl: 'templates/specialtiesPages/specialties-stonework.html', controller: "CollageCtrl"}).
						otherwise({redirectTo: '/'})

						.when('/specialties-woodwork', {templateUrl: 'templates/specialtiesPages/specialties-woodwork.html', controller: "CollageCtrl"}).
						otherwise({redirectTo: '/'})

						.when('/specialties-other', {templateUrl: 'templates/specialtiesPages/specialties-other.html', controller: "CollageCtrl"}).
						otherwise({redirectTo: '/'});
				}]);

				angular.bootstrap(document, ['app']);
			}
		);
	});

})();