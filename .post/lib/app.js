(function(angular) {
  'use strict';
angular.module('FTFEventPost', ['ngAnimate','ngRoute','ui.bootstrap','updateMeta','EventFilters'])
  .controller('CardController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
      $scope.method = 'GET';
      $scope.url = 'cards.json';

      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
          then(function(response) {
            $scope.status = response.status;
            $scope.data = response.data;
          }, function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        });

    }])
   .controller('CardDetailController', ['$scope', '$http', '$templateCache', '$route', '$routeParams', 
    function($scope, $http, $templateCache,  $routeParams, $route, $dialog, $uibModal) {
      $scope.method = 'GET';
      $scope.url = 'cards.json';
      $scope.$route = $route;
      $scope.cardId = $route.cardId;
      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
          then(function(response) {
            $scope.status = response.status;
            $scope.data = response.data;
            $scope.cardOne = $scope.data.filter(function( obj ) {
              return obj._id == $scope.cardId;
            })[0] || {'content': 'NO DATA'};

          }, function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        });
       

    }])

  .config(function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'templates/cards.html',
            controller: 'CardController'
        }).
        when('/:cardId', {
            templateUrl: 'templates/card-detail.html',
            controller: 'CardDetailController'
        }).
        otherwise({
            redirectTo: '/'
        });
  })



.controller('ModalDemoCtrl', function ($scope, $uibModal, $log, $timeout) { 
  $scope.animationsEnabled = true;
  $scope.open = function (card) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'templates/modal.html',
      controller: 'ModalInstanceCtrl',
      // size: size,
      resolve: {
        cardOne: function () {
          return $scope.cardOne;
        }
      }
    });

  };

 $timeout(function() {
      // console.log ('CARDONE',$scope.cardOne.content=="NO DATA")
      if ($scope.cardOne.content!=="NO DATA") { $('#openModal').triggerHandler('click'); }
    }, 500);
})
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, cardOne) {
  $scope.cardOne = cardOne;
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
    
});

})(window.angular);
