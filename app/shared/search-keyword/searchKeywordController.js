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