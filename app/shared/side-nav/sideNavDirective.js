app.directive('sideNav', function() {
  return {
    templateUrl: '/app/shared/side-nav/sideNav.html',
    controller: 'sideNavController',
    controllerAs: 'sideNav'
  };
});