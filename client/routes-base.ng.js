'use strict';

angular.module('ftfKeynoteApp')

.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
 
 $stateProvider
  .state('cards', {
    url: '/',
    template: '<cards-list></cards-list>'        
  })
  // .state('cardDetails', {
  //   url: '/cards/:cardId',
  //   template: '<card-details></card-details>'
  // })
  .state('cardDetails', {
    url: '/cards/:cardId',
    templateUrl: 'client/cards/cards-detail.html',
    controller: 'CardDetailCtrl'
    // ,
    // resolve: {
    //   currentUser: ['$meteor', function($meteor) {
    //     // return $meteor.requireUser();
    //     return Meteor.user();
    //   }]
    // }
  })
  .state('admin', {
    url: '/admin',
    template: '<admin></admin>'
    // templateUrl: 'client/admin/admin.view.ng.html',
    // controller: 'AdminCtrl'
    // resolve: {
    //     currentUser: ($q) => {
    //       if (Meteor.userId() == null) {
    //         return $q.reject('AUTH_REQUIRED');
    //       }
    //       else {
    //         return $q.resolve();
    //       }
    //     }
    //   }
  })
  .state('users',{
    url: '/users',
    template: '<users></users>'
  })


  $urlRouterProvider.otherwise('/404');
 })

.run(['$rootScope', '$state', function($rootScope, $state) {
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
