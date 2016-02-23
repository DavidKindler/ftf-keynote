Meteor.startup(function() {
  //Initialize TweetsTemp Collection
  if(TweetsTemp.find().count() === 0) {
    var tweets = [
      'Tweets Item',
    ];
    tweets.forEach(function(tweet) {
      TweetsTemp.insert({
        name: tweet,
        createdAt: new Date()
      });
    });
  }

  //Initialize Tweets Collection
  if(Tweets.find().count() === 0) {
    var tweets = [
      'Tweets Collection Init',
    ];
    tweets.forEach(function(tweet) {
      Tweets.insert({
        type: "Test",
        tweet: tweet,
        createdAt: new Date()
      });
    });
  }

  //Initialize TweetStreams Collection
  if(TweetsStreams.find().count() === 0) {
    var tweetsstreams = [
      'TweetsStreams Init',
    ];
    tweetsstreams.forEach(function(tweetsstream) {
      TweetsStreams.insert({
        stream: tweetsstream,
        createdAt: new Date()
      });
    });
  }

  //Start twitter instance
  T = new Twit({
    consumer_key:         'sE8ebbuGPSMeTG9mON0oXci4n',
    consumer_secret:      'M7b0xgbqOLanhlsB2rhMTft1snNql3HJctjOqW5OPCTsgycDPf',
    access_token:         '38565910-oWfiC6MNCaRlrpkQLJxBUpuWJi2zkQMAyuaabxjx5',
    access_token_secret:  'mNy7jQiCnhY2FFiFhWK7ET9S1r1j3cgRdhB1Xl9gAFhSa',
    timeout_ms:           60*1000,
  });

  //Global streams Holder
  Streams = {};

  TweetNew = Meteor.bindEnvironment(function(tweet, user){
      console.log("New tweet from @"+tweet.user.screen_name);
      TweetsTemp.insert({
       user: user,
       tweet: tweet,
       createdAt: new Date()
      });
    });

  TweetStreamNew = Meteor.bindEnvironment(function(user){
    console.log("New stream started for userID: "+user);
      TweetsStreams.insert({
       user: user,
       createdAt: new Date()
      });
    });

  //Methods to work with temporary tweets
  Meteor.methods({
    TweetStartStream: function (target) {
      user = this.userId;
      Streams["stream"+user] = T.stream('statuses/filter', { track: target }).on('tweet', function (tweet){
        TweetNew(tweet, user);
      });
      TweetStreamNew(user);
      return "Twitter stream started";
    },
    TweetStopStream: function () {
      user = this.userId;
      Streams["stream"+user].stop();
      TweetsStreams.remove({user: this.userId});
      return "Twitter stream from "+user+" has stopped";
    },
    TweetClearStream: function () {
      TweetsTemp.remove({user: this.userId});
      return "Twitter stream cleared";
    },
    TweetTempRemove: function (tweet) {
      TweetsTemp.remove({_id: tweet});
      return "Tweet removed";
    },
    TweetAdd: function (tweet) {
      Tweets.insert({
        tweet: tweet,
        published: true,
        createdAt: new Date()
      });
      TweetsTemp.update({
        "tweet.id": tweet.id
      },{
          $set: {
            status: "favorited"
          }
        }
      );
      return "Tweet favorited";
    }
  });
});
