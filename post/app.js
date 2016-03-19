(function(angular) {
  'use strict';
angular.module('FTFEventPost', ['ngRoute'])
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
    function($scope, $http, $templateCache,  $routeParams, $route) {
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
            })[0];
          }, function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        });

    }])
  .filter('html', function($sce) {
      return function(val) {
          return $sce.trustAsHtml(val);
      };
  })
  .config(function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'cards.html',
            controller: 'CardController'
        }).
        when('/:cardId', {
            templateUrl: 'card-detail.html',
            controller: 'CardDetailController'
        }).
        otherwise({
            redirectTo: '/'
        });
  })


})(window.angular);
