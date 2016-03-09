'use strict'

angular.module('ftfKeynoteApp')
.directive('bstoolbar', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/toolbar/toolbar.view.html',
    replace: true
  };
});