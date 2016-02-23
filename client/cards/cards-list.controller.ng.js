'use strict'

angular.module('iotdashboardApp')
.controller('CardsListCtrl', function($scope) {
  $scope.page = 1;
  $scope.perPage = 3;
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1';
  
  $scope.helpers({
    cards: function() {
      return Cards.find({}, {
        sort: $scope.getReactively('sort') 
      });
    },
    cardsCount: function() {
      return Counts.get('numberOfCards');
    }
  });
                  
  $scope.subscribe('cards', function() {
    return [{
      sort: $scope.getReactively('sort'),
      limit: parseInt($scope.getReactively('perPage')),
      skip: ((parseInt($scope.getReactively('page'))) - 1) * (parseInt($scope.getReactively('perPage')))
    }, $scope.getReactively('search')];
  });

  $scope.save = function() {
    if ($scope.form.$valid) {
      Cards.insert($scope.newCard);
      $scope.newCard = undefined;
    }
  };
                  
  $scope.remove = function(card) {
    Cards.remove({_id:card.id});
  };
                  
  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };
                  
  return $scope.$watch('orderProperty', function() {
    if ($scope.orderProperty) {
      $scope.sort = {
        name_sort: parseInt($scope.orderProperty)
      };
    }
  });
});