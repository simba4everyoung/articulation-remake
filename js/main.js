var app = angular.module('ArticulationApp', ['ngRoute']);

app.config([
	'$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/app/components/outbound/outbound.html',
			controller: 'outboundController',
			controllerAs: 'outbound'
		})
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
  this.title = 'Inbound Pathways';
});
app.controller('outboundController', function() {
  this.title = 'Outbound Pathways';
});
app.controller('searchKeywordController', function(){
  this.keyword = '';
});
app.directive('searchKeyword', function() {
  return {
    templateUrl: '/app/shared/search-keyword/searchKeyword.html',
    controller: 'searchKeywordController',
    controllerAs: 'searchKeyword'
  };
});
app.controller('sideNavController', function() {
  this.items = ['Outbound Pathways', 'Inbound Pathways', 'Canada Map', 'Ontario Map'];
});
app.directive('sideNav', function() {
  return {
    templateUrl: '/app/shared/side-nav/sideNav.html',
    controller: 'sideNavController',
    controllerAs: 'sideNav'
  };
});