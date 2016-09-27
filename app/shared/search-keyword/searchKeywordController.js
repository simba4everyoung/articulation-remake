app.controller('searchKeywordController', function($http){
  this.keyword = {};
  this.results = [];
  
  this.search = function() {
    $http({
      method: 'GET',
      url: 'http://articulation-dev.soulfxtech.com/api/Outbound/Search',
      params: this.keyword
    })
    .success(function(data) {
      this.results = data;
    });
  };
});