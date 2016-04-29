// 'use strict';

angular.module('ftfKeynoteApp')

.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

 $stateProvider
  .state('cards', {
    url: '/',
    // template: '<cards-list></cards-list>',
    templateUrl: 'client/cards/cards-list.html',
    controller: 'cardsList'    
  })
  
  .state('cardDetails', {
    url: '/card/:cardId',
    templateUrl: 'client/cards/cards-detail.html',
    controller: 'CardDetailCtrl'
   
  })
  .state('admin', {
    url: '/admin',
    template: '<admin></admin>'
     
  })
  
  $urlRouterProvider.otherwise('/');
 })
.run(['$rootScope', '$state', function($rootScope, $state, $location) {
  $rootScope.location = $location;
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    switch(error) {
      case 'AUTH_REQUIRED':
        console.log ('AUTH_REQUIRED');
        $state.go('admin');
        break;
      case 'FORBIDDEN':
        console.log ('FORBIDDEN');
        $state.go('admin');
        break;
      case 'UNAUTHORIZED':
        console.log ('UNAUTHORIZED');
        $state.go('admin');
        break;
    }
  });

}]);
