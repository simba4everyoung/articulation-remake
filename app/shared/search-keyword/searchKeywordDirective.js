app.directive('searchKeyword', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: '/app/shared/search-keyword/searchKeyword.html',
    controller: 'searchKeywordController',
    controllerAs: 'searchKeyword'
  };
});