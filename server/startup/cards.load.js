Meteor.startup(function() {
  if(Cards.find().count() === 0) {
    var cards = [
      {
        'name': 'card 1',
        'time' : 1,
        'public': true
      },
      {
        'name': 'card 2',
        'time' : 2,
        'public': true
      }
    ];
    cards.forEach(function(card) {
      Cards.insert(card);
    });
  }
});