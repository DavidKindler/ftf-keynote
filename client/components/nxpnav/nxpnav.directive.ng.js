'use strict'

angular.module('ftfKeynoteApp')
.directive('nxpnav', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/nxpnav/nxpnav.view.ng.html',
    replace: true
  };
});

angular.module('ftfKeynoteApp')
.directive('bsnxpnav', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/nxpnav/nxpnav.view.html',
    replace: true
  };
});
