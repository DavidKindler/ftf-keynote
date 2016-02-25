'use strict'

angular.module('iotdashboardApp')
.directive('toolbar', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
    replace: true
  };
});

angular.module('iotdashboardApp')
.directive('bstoolbar', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/toolbar/toolbar.view.html',
    replace: true
  };
});