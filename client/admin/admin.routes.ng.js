'use strict'

angular.module('iotdashboardApp')
.config(function($stateProvider) {
  $stateProvider
  .state('admin', {
    url: '/admin',
    templateUrl: 'client/admin/admin.view.ng.html',
    controller: 'AdminCtrl',
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
  });
})
// .run(function ($rootScope, $state) {
//     $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
//       if (error === 'AUTH_REQUIRED') {
//         $state.go('tweets-list');
//       }
//     });
//   });
