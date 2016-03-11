/*  angular.module('ftfKeynoteApp')
  .controller('cardDetailCtrl', function($scope, $stateParams) {
    $scope.helpers({
      card: function() {
        return Cards.findOne({ _id: $stateParams.cardId }); 
      }
    })
  })
  .directive('cardDetails', function () {
    return {
      // restrict: 'E',
      templateUrl: 'client/cards/cards-detail.html'
      //, controllerAs: 'cardDetails'
      // ,
      // controller: function ($scope, $stateParams, $reactive, $state) {
      //   $reactive(this).attach($scope);
      //   this.subscribe('cards');
      //   // this.helpers({
      //   //   card: () => {
      //   //     return Cards.findOne({_id: $stateParams.cardId});
      //   //   }
      //   // });
      // }
    }
  });
*/

angular.module('ftfKeynoteApp')
.controller('CardDetailCtrl', function($scope, $stateParams) {
  
  $scope.subscribe('cards');
  $scope.helpers({
    card: function() {
      return Cards.findOne({ _id: $stateParams.cardId }); 
    }
  });
});
  