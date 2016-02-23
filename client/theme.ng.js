'use strict'

angular.module('iotdashboardApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('amber')
  .accentPalette('orange');
});
