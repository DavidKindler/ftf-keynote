angular.module('ftfKeynoteApp')
.controller('TweetAdminCtrl', function($scope) {

  // $scope.tabs = [
  //     { title:'Dynamic Title 1', content:'Dynamic content 1' },
  //     { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  //   ];

  //   $scope.alertMe = function() {
  //     setTimeout(function() {
  //       $window.alert('You\'ve selected the alert tab!');
  //     });
  //   };

  //   $scope.model = {
  //     name: 'Tabs'
  //   };

  $scope.helpers({
    tweetstemp: () => {
      return TweetsTemp.find({});
    }
  });

  $scope.subscribe('tweetstemp', function() {
    return [];
  });

  $scope.helpers({
    tweetsstreams: () => {
      return TweetsStreams.findOne({});
    }
  });

  $scope.subscribe('tweetsstreams', function() {
    return [];
  });

  $scope.helpers({
    tweets: () => {
      return Tweets.find({});
    }
  });

  $scope.subscribe('tweets', function() {
    return [];
  });

  $scope.startStream = function(target) {
    //Calls method to start a new stream
    Meteor.call('TweetStartStream', target,
    function (error, result) {
      if(error){
        console.error(error);
      }else{
        console.info(result);
      }
    });
  };

  $scope.stopStream = function() {
    //Calls method to stop a stream
    Meteor.call('TweetStopStream',
    function (error, result) {
      if(error){
        console.error(error);
      }else{
        console.info('Tweet stream stopped',result);
      }
    });
  };

  $scope.clearStream = function() {
    //Calls method to clear the stream
    Meteor.call('TweetClearStream',
    function (error, result) {
      if(error){
        console.error(error);
      }else{
        console.info(result);
      }
    });
  };

  $scope.tweetRemove = function(tweet) {
    //Calls method to remove the temptweet
    Meteor.call('TweetTempRemove', tweet,
    function (error, result) {
      if(error){
        console.error(error);
      }else{
        console.info(result);
      }
    });
  };

  $scope.tweetFavorite = function(tweet) {
    //Calls method to remove the temptweet
    Meteor.call('TweetAdd', tweet,
    function (error, result) {
      if(error){
        console.error(error);
      }else{
        console.info(result);
      }
    });
  };

});
