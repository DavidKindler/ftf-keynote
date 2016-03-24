angular.module('ftfKeynoteApp')
.controller('tweetsCtrl', function($scope) {
  $scope.subscribe('tweets');
  $scope.helpers({
    livetweets: function() {
      return Tweets.find({});
    }
  });

});