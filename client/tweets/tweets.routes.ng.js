'use strict'

angular.module('ftfKeynoteApp')
.config(function($stateProvider) {
  $stateProvider
  .state('tweets-list', {
    url: '/tweets',
    templateUrl: 'client/tweets/tweets-list.view.ng.html',
    controller: 'TweetsListCtrl'
  })
  .state('tweet-admin', {
    url: '/tweets/admin',
    templateUrl: 'client/tweets/tweet-admin.view.ng.html',
    controller: 'TweetAdminCtrl',
    resolve: {
        currentUser: ($q) => {
          if (Meteor.userId() == null) {
            return $q.reject('AUTH_REQUIRED');
          }
          else {
            return $q.resolve();
          }
        }
      }
  });
})
.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('tweets-list');
      }
    });
  });
