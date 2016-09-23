angular.module('ArticulationApp.controllers', []).

/* SideBar Controller */
controller('sidebarController', function($scope) {
  $scope.items = ['Outbound Pathways', 'Inbound Pathways', 'Canada Map', 'International Map'];
});