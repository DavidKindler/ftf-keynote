'use strict'

angular.module('ftfKeynoteApp')
.directive('bsnxpnav', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/nxpnav/nxpnav.view.html',
    replace: true
  };
});
