app.controller('searchKeywordController', function($http){
  this.keyword = {};
  
  this.post = function() {
    $http({
      method: 'POST',
      url: 'http://articulation-dev.soulfxtech.com/api/Outbound/Search?',
      data: $.param(this.keyword),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    })
    .success(function(data) {
      console.log(data);
    });
  };
});