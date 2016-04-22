 
  angular.module('ftfKeynoteApp')

.controller('cardsList', function($scope, $reactive, $stateParams, $log) {
  // $reactive(this).attach($scope);
  $scope.subscribe('publicCards');
  // $scope.$log = $log;
  $scope.currentUrl = location.origin+"/#/card"
  // $log.debug('stateparams:',$stateParams);
  // $scope.subscribe('cards');
  // $scope.id = $stateParams.cardId;
  $scope.helpers({
    cards: function() {
      return Cards.find({}) 
    }
    // videoTime: function() {
    //   // console.log ('videoTime',Session.get('videoTime'))
    //   return Session.get('videoTime');
    // }
  });
});

