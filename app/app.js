var app = angular.module('ArticulationApp', ['ngRoute']);

app.config([
	'$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/OutboundPathways', {
			templateUrl: '/app/components/outbound/outbound.html',
			controller: 'outboundController',
			controllerAs: 'outbound'
		})
		.when('/InboundPathways', {
			templateUrl: '/app/components/inbound/inbound.html',
			controller: 'inboundController',
			controllerAs: 'inbound'
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);
