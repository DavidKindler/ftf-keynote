/*'use strict'

angular.module('ftfKeynoteApp')
.config(function($urlRouterProvider, $stateProvider, $locationProvider) {

  $stateProvider
  .state('cards-list', {
    url: '/cards',
    templateUrl: 'client/cards/cards-list.view.ng.html',
    controller: 'CardsListCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        // return $meteor.requireUser();
        return Meteor.user();
      }]
    }
  })
  .state('card-detail', {
    url: '/cards/:cardId',
    templateUrl: 'client/cards/card-detail.view.ng.html',
    controller: 'CardDetailCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        // return $meteor.requireUser();
        return Meteor.user();
      }]
    }
  });
});*/