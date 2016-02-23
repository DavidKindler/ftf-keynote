'use strict'

Meteor.publish('cards', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfCards', Cards.find(where), {noReady: true});
  return Cards.find(where, options);
});
