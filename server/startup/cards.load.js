Meteor.startup(function() {
  if(Cards.find().count() === 0) {
    var cards = [
      {
        'name': 'card 1'
      },
      {
        'name': 'card 2'
      }
    ];
    cards.forEach(function(card) {
      Cards.insert(card);
    });
  }
});