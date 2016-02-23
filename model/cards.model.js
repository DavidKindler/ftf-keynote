Cards = new Mongo.Collection('cards');

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