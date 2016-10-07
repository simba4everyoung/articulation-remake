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

app.factory('SearchService', function($http) {
  var baseUrl = 'http://articulation-dev.soulfxtech.com/';

  return {
    apiUrl: {
      outbound: {
        keyword: baseUrl + "api/Outbound/Search"
      },
      inbound: {
        keyword: baseUrl + "api/Inbound/Search"
      }
    },
    search: function(url, params) {
      return $http({
        method: 'GET',
        url: url,
        params: params
      });
    } 
  };
});
app.filter('url', function() {
  return function(text) {
    return text.split(' ').join('');
  };
});
app.controller('inboundController', function($scope) {
  $scope.page = {};

  $scope.page.title = 'Inbound Pathways';
});
app.controller('outboundController', function($scope) { 
  $scope.page = {};
  $scope.page.title = 'Outbound Pathways';
});
app.controller('searchKeywordController', function(SearchService, $scope){
  this.keyword = {};
  var url = SearchService.apiUrl.outbound.keyword;
  var vm = this;

  this.search = function() {
    $scope.results = [];
    SearchService.search(url, vm.keyword).success(function(data) {
      data.forEach(function(item) {
        $scope.results.push({
          id: item.outbPathwayID,
          partnerProgram: item.partnerProgramName || 'N/A',
          partnerInstitution: item.institutionName || 'N/A',
          credential: item.partnerCreds || 'N/A',
          programLength: item.partnerProgLength || 'N/A',
          creditsAwarded: item.creditsAward || 'N/A',
          campus: item.partnerCampus || 'N/A',
          location: item.province || 'N/A',
          country: item.country || 'N/A',
          website: item.website || 'N/A',
          description: item.description || 'N/A'
        });
      });
    });
  };
});
app.directive('searchKeyword', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: '/app/shared/search-keyword/searchKeyword.html',
    controller: 'searchKeywordController',
    controllerAs: 'searchKeyword'
  };
});
app.controller('sideNavController', function($rootScope) {
  this.items = ['Outbound Pathways', 'Inbound Pathways', 'Canada Map', 'Ontario Map'];

  $rootScope.$on('$routeChangeSuccess', function(event, path) {
    
  });
});
app.directive('sideNav', function() {
  return {
    templateUrl: '/app/shared/side-nav/sideNav.html',
    controller: 'sideNavController',
    controllerAs: 'sideNav'
  };
});