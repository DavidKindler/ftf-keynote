Tweets = new Mongo.Collection('tweets');
Cards = new Mongo.Collection('cards');
ImagesURL = new Mongo.Collection('images');
FinalModal = new Mongo.Collection('finalmodal');

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

FinalModal.allow({
  insert: function(userId, finalmodal) {
    return userId;
  },
  update: function(userId, finalmodal, fields, modifier) {
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