// 'use strict';

angular.module('ftfKeynoteApp')

.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(false);

 $stateProvider
  .state('cards', {
    url: '/',
    // template: '<cards-list></cards-list>',
    templateUrl: 'client/cards/cards-list.html',
    controller: 'cardsList'    
  })
  // .state('cardDetails', {
  //   url: '/cards/:cardId',
  //   template: '<card-details></card-details>'
  // })
  // .state('cardList', {
  //   url: '/card',
  //   // templateUrl: 'client/cards/cards-list.html',
  //   // controller: 'CardDetailCtrl'
  //   template: '<cards-list></cards-list>'
  //   // ,
  //   // resolve: {
  //   //   currentUser: ['$meteor', function($meteor) {
  //   //     // return $meteor.requireUser();
  //   //     return Meteor.user();
  //   //   }]
  //   // }
  // })
  .state('cardDetails', {
    url: '/card/:cardId',
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
    // ,controller: 'AdminCtrl'
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

  .state('tweets-list', {
    url: '/tweets-list',
    templateUrl: 'client/tweets/tweets-list.view.ng.html',
    controller: 'TweetsListCtrl'
  })
  .state('tweets-admin', {
    url: '/tweets-admin',
    templateUrl: 'client/tweets/tweet-admin.view.ng.html',
    controller: 'TweetAdminCtrl'
    // ,
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
  // .state('404', {
  //   url: '/404',
  //   templateUrl: 'client/404/404.view.ng.html'
  // })
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
  $rootScope.Xcards = [{"_id":"EaX9DzkYfP8popqF9","content":"card 1","time":1,"timestamp":"2016-03-18T15:36:36.783Z","event":{"id":"1","name":"Keynote"},"public":true},{"_id":"RdcZAtFyfqSK6iP6e","content":"card 2","time":2,"timestamp":"2016-03-18T15:36:36.783Z","event":{"id":"1","name":"Keynote"},"public":true},{"_id":"PxifxEaZtEzGHA3kh","content":"aasdasdasd","owner":"YDGojzXYdqreJZKS2","event":{"id":"1","name":"Keynote"},"public":true,"timestamp":"2016-03-18T15:51:23.995Z","time":14},{"_id":"FLKfy83K9TQfq8oSc","content":"asad adasdas","owner":"YDGojzXYdqreJZKS2","event":{"id":"1","name":"Keynote"},"public":true,"timestamp":"2016-03-18T15:51:30.983Z","time":4},{"_id":"hLwAceHQ9F4eQpEFC","content":"213123123","owner":"YDGojzXYdqreJZKS2","event":{"id":"1","name":"Keynote"},"public":true,"timestamp":"2016-03-18T15:51:35.895Z","time":8},{"_id":"svgBDQGCuadyfirSZ","content":"asda a asdasd","owner":"YDGojzXYdqreJZKS2","event":{"id":"1","name":"Keynote"},"public":true,"timestamp":"2016-03-18T16:06:37.817Z","time":39},{"_id":"rxDy7ebiJWmbXbkSW","content":"bsa asdsadasd","owner":"YDGojzXYdqreJZKS2","event":{"id":"1","name":"Keynote"},"public":true,"timestamp":"2016-03-18T16:20:05.834Z","time":11},{"_id":"4AzQhPPfTxbZyYDk6","content":"<span onmouseover='this.textContent=\"Hello\"' onmouseout='this.textContent=\"Howdy\"'>Is <i>anyone</i> reading this?</span>\nTHIS IS UNSAFE","owner":"YDGojzXYdqreJZKS2","event":{"id":"1","name":"Keynote"},"public":true,"timestamp":"2016-03-18T19:23:21.968Z","time":20}];
}]);
