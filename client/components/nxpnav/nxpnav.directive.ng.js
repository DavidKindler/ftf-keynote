'use strict'

angular.module('iotdashboardApp')
.directive('nxpnav', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/nxpnav/nxpnav.view.ng.html',
    replace: true
  };
});
