'use strict'

angular.module('iotdashboardApp')
.controller('CardDetailCtrl', function($scope, $stateParams) {
  
  $scope.helpers({
    card: function() {
      return Cards.findOne({ _id: $stateParams.cardId }); 
    }
  });
  
  $scope.subscribe('cards');
  
  $scope.save = function() {
    if($scope.form.$valid) {
      delete $scope.card._id;
      Cards.update({
        _id: $stateParams.cardId
      }, {
        $set: $scope.card
      }, function(error) {
        if(error) {
          console.log('Unable to update the card'); 
        } else {
          console.log('Done!');
        }
      });
    }
  };
        
  $scope.reset = function() {
    $scope.card.reset();
  };
});