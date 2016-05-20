'use strict'

Meteor.publish("cards", function () {
  return Cards.find({});
});

Meteor.publish("finalmodal", function () {
  return FinalModal.find({});
});

Meteor.publish("publicCards", function () {
  let selector = {
    $and: [{"public": true}, {"public": {$exists: true}} ]
  };
  return Cards.find(selector);
});


Meteor.publish('tweets', function() {
  return Tweets.find({},{fields: {"tweet.text": 1,"tweet.created_at":1,"tweet.user.profile_image_url":1, "tweet.user.screen_name":1, "tweet.data.id_str":1 }, sort: {createdAt: -1}, limit:50});
});

Meteor.publish('images', function() {
  return ImagesURL.find({});
});


// Authorized users can manage user accounts
Meteor.publish("users", function () {
  var user = Meteor.users.findOne({_id:this.userId});

  if (Roles.userIsInRole(user, ["admin","manage-users"])) {
    // console.log('publishing users', this.userId)
    return Meteor.users.find({});
    // return Meteor.users.find({}, {fields: {emails: 1, profile: 1, roles: 1}});
  } 

  this.stop();
  return;
});


