'use strict'

angular.module('iotdashboardApp')
.config(function($stateProvider) {
  $stateProvider
  .state('404', {
    url: '/404',
    templateUrl: 'client/404/404.view.ng.html'
    // controller: 'MainCtrl'
  });
});