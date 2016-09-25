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

app.filter('url', function() {
	return function(text) {
		return text.split(' ').join('');
	};
});
app.controller('inboundController', function() {
	this.name='inbound';
});	
app.directive('inbound', function() {
	return {
		templateUrl: 'app/components/inbound/inbound.html',
		controller: 'inboundController',
		controllerAs: 'inbound'
	};
});
app.controller('outboundController', function() {
  this.name = 'outbound';
});
app.directive('outbound', function() {
	return {
		templateUrl: 'app/components/outbound/outbound.html',
		controller: 'outboundController',
		controllerAs: 'outbound'
	};
});
app.controller('sideNavController', function() {
  this.navItems = ['Outbound Pathways', 'Inbound Pathways', 'Canada Map', 'International Map'];
  this.currentView = 'outbound';
});
app.directive('sideNav', function() {
	return {
		templateUrl: 'app/shared/sideNav/sideNav.html',
		controller: 'sideNavController',
		controllerAs: 'sideNav'
	};
});