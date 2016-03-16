// 'use strict'

// angular.module('ftfKeynoteApp')
// .controller('MainCtrl', function($scope) {
// //Main controller
// $scope.page = 1;
// $scope.perPage = 3;
// $scope.sort = {name_sort : 1};
// $scope.orderProperty = '1';

// $scope.helpers({
//   cards: function() {
//     return Cards.find({}, {
//       sort: $scope.getReactively('sort')
//     });
//   }
// });

// $scope.subscribe('cards', function() {
//   return [{
//     sort: $scope.getReactively('sort'),
//   }, $scope.getReactively('search')];
// });


// });

  
  angular.module('ftfKeynoteApp').directive('cardsList', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/cards/cards-list.html',
      controllerAs: 'cardsList',
      controller: function($scope, $reactive,  $mdDialog) {
        $reactive(this).attach($scope);
        this.subscribe('publicCards');

        this.helpers({
          cards: function() {
             return Cards.find({}) 
          },
          videoTime: function() {
            return Session.get('videoTime');
            // return $scope.getReactively('videoTime');
          }

        });

      }
    }
  });


angular.module('ftfKeynoteApp').filter('published', function () {
  return function(cards,timeFilter) {
    return _.filter(cards, function(card){
       return card.time <= timeFilter
    })
  }
});

// angular.module('ftfKeynoteApp').animation('.slide',[function(){
//   return {
//     enter: function(element,doneFn) {
//       jQuery(element).fadeIn(5000,doneFn);
//     },
//     move: function(element,doneFn){
//       jQuery(element).fadeIn(5000,doneFn);
//     },
//     leave: function(element,doneFn){
//       jQuery(element).fadeOut(5000,doneFn);
//     }

//   }

// }])