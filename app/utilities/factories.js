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