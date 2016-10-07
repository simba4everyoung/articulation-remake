app.controller('sideNavController', function($rootScope) {
  this.items = ['Outbound Pathways', 'Inbound Pathways', 'Canada Map', 'Ontario Map'];

  $rootScope.$on('$routeChangeSuccess', function(event, path) {
    
  });
});