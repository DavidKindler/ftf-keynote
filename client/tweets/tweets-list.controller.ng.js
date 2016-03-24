'use strict'

angular.module('ftfKeynoteApp')
.controller('TweetsListCtrl', function($scope) {  
  $scope.subscribe('tweets');
  $scope.helpers({
    tweets: function() {
      return Tweets.find({});
    }
    ,
    tweetsCount: function() {
      return Tweets.find().count();
    }
  });
                  

});