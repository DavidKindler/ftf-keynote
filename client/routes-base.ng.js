'use strict';

angular.module('ftfKeynoteApp')

.config(function($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');
}).run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    switch(error) {
      case 'AUTH_REQUIRED':
        $state.go('admin');
        break;
      case 'FORBIDDEN':
        $state.go('admin');
        break;
      case 'UNAUTHORIZED':
        $state.go('admin');
        break;
    }
  });
}]);
