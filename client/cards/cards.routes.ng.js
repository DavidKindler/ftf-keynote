'use strict'

angular.module('iotdashboardApp')
.config(function($stateProvider) {
  $stateProvider
  .state('cards-list', {
    url: '/cards',
    templateUrl: 'client/cards/cards-list.view.ng.html',
    controller: 'CardsListCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  })
  .state('card-detail', {
    url: '/cards/:cardId',
    templateUrl: 'client/cards/card-detail.view.ng.html',
    controller: 'CardDetailCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  });
});