 
angular.module('ftfKeynoteApp')
.controller('cardsList', ['$scope', '$reactive','$timeout', function($scope, $reactive, $stateParams) {
  $scope.subscribe('publicCards');
  $scope.subscribe('finalmodal');
  $scope.currentUrl = 'http://www.nxp.com/event/ftf2016/day1/card';

  $scope.helpers({
    cards: function() {
      return Cards.find({}) 
    },
    finalmodal : function(){
    	return FinalModal.findOne({'public': true})
    }

  });

}])
 