'use strict'

Meteor.publish('tweetstemp', function(options) {
  Counts.publish(this, 'numberOfTweets', TweetsTemp.find({user: this.userId}), {noReady: true});
  return TweetsTemp.find({user: this.userId}, options);
});

Meteor.publish('tweetsstreams', function(options) {
  return TweetsStreams.find({user: this.userId}, options);
});

Meteor.publish('tweets', function(options) {
  Counts.publish(this, 'numberOfTweets', Tweets.find({}), {noReady: true});
  return Tweets.find({}, options);
});
