angular.module('ftfKeynoteApp')
.controller('CardDetailCtrl', function($scope, $stateParams, $log) {
  // $scope.$log = $log;
  // $log.debug('stateparams:',$stateParams);
  // $scope.cards = $rootScope.Xcards;
  // console.log ($scope.cards);
  // console.log ($rootScope.Xcards);
  $scope.subscribe('cards');
  $scope.id = $stateParams.cardId;
  $scope.currentUrl = 'http://www.nxp.com/event/ftf2016/day1/card';
 
  $scope.helpers({
    cardOne: function() {
      // console.log (Cards.findOne({_id:'Z7JW8DySD42g7LANT'}));
      return Cards.findOne({ _id: $scope.id }); 
      // return Cards.findOne({ _id: $stateParams.cardId }); 
	},
    cards: function() {
      return Cards.find({}) 
    }
  });
});
