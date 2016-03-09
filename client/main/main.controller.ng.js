'use strict'

angular.module('ftfKeynoteApp')
.controller('MainCtrl', function($scope) {
//Main controller
$scope.page = 1;
$scope.perPage = 3;
$scope.sort = {name_sort : 1};
$scope.orderProperty = '1';

$scope.helpers({
  cards: function() {
    return Cards.find({}, {
      sort: $scope.getReactively('sort')
    });
  }
  // ,
  // cardsCount: function() {
  //   return Counts.get('numberOfCards');
  // }
});

$scope.subscribe('cards', function() {
  return [{
    sort: $scope.getReactively('sort'),
    // limit: parseInt($scope.getReactively('perPage')),
    // skip: ((parseInt($scope.getReactively('page'))) - 1) * (parseInt($scope.getReactively('perPage')))
  }, $scope.getReactively('search')];
});

//
// return $scope.$watch('orderProperty', function() {
//   if ($scope.orderProperty) {
//     $scope.sort = {
//       name_sort: parseInt($scope.orderProperty)
//     };
//   }
// });
});
