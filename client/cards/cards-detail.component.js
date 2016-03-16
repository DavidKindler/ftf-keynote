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


// angular.module('ftfKeynoteApp')
// .directive('cardDetail', function() {
//   return {
//     return: "AE",
//     templateUrl: 'card-detail.html',
//     controllerAs: 'cardDetailCtrl',
//     controller: function($scope,$stateParams){
//       this.cardId = $stateParams,cardId;
//       $scope.subscribe('cards');
//       $scope.helpers({
//         cardOne: function() {
//           return Cards.findOne({ _id: this.cardId }); 
//         },
//         cards: () => {
//                  return Cards.find({}) 
//               },
//       })        
//     }
//   }  

// });
  

angular.module('ftfKeynoteApp')
.controller('CardDetailCtrl', function($scope, $stateParams, $log) {
  $scope.$log = $log;
  $log.debug('stateparams:',$stateParams);
  $scope.subscribe('cards');
  $scope.id = $stateParams.cardId;
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
  
angular.module('ftfKeynoteApp')
.filter('published', function () {
  return function(cards,timeFilter) {
    return _.filter(cards, function(card){
       return card.time <= timeFilter
    })
  }
});
