 
  angular.module('ftfKeynoteApp')
  // .directive('cardsList', function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'client/cards/cards-list.html',
  //     controllerAs: 'cardsList',
  //     controller: function($scope, $reactive,  $mdDialog) {
  //       $reactive(this).attach($scope);
  //       this.subscribe('publicCards');

  //       this.helpers({
  //         cards: function() {
  //            return Cards.find({}) 
  //         },
  //         videoTime: function() {
  //           return Session.get('videoTime');
  //           // return $scope.getReactively('videoTime');
  //         }

  //       });

  //     }
  //   }
  // })

.controller('cardsList', function($scope, $reactive, $stateParams, $log) {
  // $reactive(this).attach($scope);
  $scope.subscribe('publicCards');
  $scope.$log = $log;
  $scope.currentUrl = location.origin+"/#/card"
  // $log.debug('stateparams:',$stateParams);
  // $scope.subscribe('cards');
  // $scope.id = $stateParams.cardId;
  $scope.helpers({
    cards: function() {
      return Cards.find({}) 
    },
    videoTime: function() {
      // console.log ('videoTime',Session.get('videoTime'))
      return Session.get('videoTime');
    }
  });
});

