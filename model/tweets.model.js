TweetsTemp = new Mongo.Collection('tweetstemp');

TweetsTemp.allow({
  insert: function(userId, tweet) {
    return true;
  },
  update: function(userId, tweet, fields, modifier) {
    return true;
  },
  remove: function(userId, tweet) {
    return true;
  }
});

TweetsStreams = new Mongo.Collection('tweetsstreams');

TweetsStreams.allow({
  insert: function(userId, tweet) {
    return true;
  },
  update: function(userId, tweet, fields, modifier) {
    return true;
  },
  remove: function(userId, tweet) {
    return true;
  }
});

Tweets = new Mongo.Collection('tweets');

Tweets.allow({
  insert: function(userId, card) {
    return userId;
  },
  update: function(userId, card, fields, modifier) {
    return userId;
  },
  remove: function(userId, card) {
    return userId;
  }
});
