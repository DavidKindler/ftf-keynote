Meteor.startup(function() {
  if(Cards.find().count() === 0) {
    var cards = [
      {
        'content': 'card 1',
        'time' : 1,
        'public': true
      },
      {
        'content': 'card 2',
        'time' : 2,
        'public': true
      }
    ];
    cards.forEach(function(card) {
      Cards.insert(card);
    });
  }
});