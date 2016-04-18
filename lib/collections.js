Tweets = new Mongo.Collection('tweets');
Cards = new Mongo.Collection('cards');
ImagesURL = new Mongo.Collection('images');

Cards.allow({
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

ImagesURL.allow({
  insert: function(userId, image) {
    return userId;
  },
  // update: function(userId, card, fields, modifier) {
  //   return userId;
  // },
  remove: function(userId, image) {
    return userId;
  }
});