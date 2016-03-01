'use strict'

angular.module('iotdashboardApp')
.controller('TweetsListCtrl', function($scope) {
  $scope.page = 1;
  $scope.perPage = 3;
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1';
  
  $scope.helpers({
    tweets: function() {
      return Tweets.find({}, {
        sort: $scope.getReactively('sort') 
      });
    }
    ,
    tweetsCount: function() {
      return Counts.get('numberOfTweets');
    }
  });
                  
  $scope.subscribe('tweets', function() {
    return [{
      sort: $scope.getReactively('sort'),
      limit: parseInt($scope.getReactively('perPage')),
      skip: ((parseInt($scope.getReactively('page'))) - 1) * (parseInt($scope.getReactively('perPage')))
    }, $scope.getReactively('search')];
  });

  $scope.save = function() {
    if ($scope.form.$valid) {
      Tweets.insert($scope.newTweet);
      $scope.newTweet = undefined;
    }
  };
                  
  $scope.remove = function(tweet) {
    Tweets.remove({_id:tweet.id});
  };
                  
  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };
                  
  return $scope.$watch('orderProperty', function() {
    if ($scope.orderProperty) {
      $scope.sort = {
        name_sort: parseInt($scope.orderProperty)
      };
    }
  });
});