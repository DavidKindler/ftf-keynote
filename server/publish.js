'use strict'

Meteor.publish("cards", function () {
  return Cards.find({});
});

Meteor.publish("publicCards", function () {
  let selector = {
    $and: [{"public": true}, {"public": {$exists: true}} ]
  };
  return Cards.find(selector);
});

Meteor.publish('tweets', function(options) {
  // Counts.publish(this, 'numberOfTweets', Tweets.find({}), {noReady: true});
  return Tweets.find({}, options);
});

Meteor.publish('images', function() {
  // Counts.publish(this, 'numberOfTweets', Tweets.find({}), {noReady: true});
  return ImagesURL.find({});
});
