Meteor.startup(function() {
  if(Cards.find().count() === 0) {
    var cards = [
      {
        'content': 'card 1',
        'time' : 1,
         'timestamp' : new Date(),
         'event' : {id: '1', name: 'Keynote'},
        'public': true
      },
      {
        'content': 'card 2',
        'time' : 2,
        'timestamp' : new Date(),
         'event' : {id: '1', name: 'Keynote'},
        'public': true
      }
    ];
    cards.forEach(function(card) {
      Cards.insert(card);
    });
  }
});