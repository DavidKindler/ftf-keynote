'use strict'

angular.module('ftfKeynoteApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('amber')
  .accentPalette('orange');
});
