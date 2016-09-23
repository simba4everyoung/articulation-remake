angular.module('ArticulationApp', [
    'ArticulationApp.controllers']);
angular.module('ArticulationApp.controllers', []).

/* Outbound Controller */
controller('outboundController', function($scope) {
  $scope.name = 'outbound';
});
angular.module('ArticulationApp.controllers', []).

/* SideBar Controller */
controller('sidebarController', function($scope) {
  $scope.items = ['Outbound Pathways', 'Inbound Pathways', 'Canada Map', 'International Map'];
});