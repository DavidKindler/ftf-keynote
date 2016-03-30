Meteor.startup(function() {
  if(Cards.find().count() === 0) {
    var cards = [
      {
        'content': 'card 1',
        'time' : 1,
         'timestamp' : new Date(),
         'event' : {id: '1', name: 'Keynote'},
         'order':1,
        'public': true
      },
      {
        'content': 'card 2',
        'time' : 2,
        'timestamp' : new Date(),
         'event' : {id: '1', name: 'Keynote'},
         'order':2,
        'public': true
      }
    ];
    cards.forEach(function(card) {
      Cards.insert(card);
    });
  }
});

Meteor.methods({
    CardAddAbove: function (order) {
        Cards.update({'order':{'$gte':order}}, {'$inc':{'order':1}}, multi=true)
        newCard = {owner: Meteor.userId(), public: false, timestamp: new Date(), order: order}
        Cards.insert(newCard);
      return "Card inserted above "+order;
    },
    CardAddBelow: function (order) {
       Cards.update({'order':{'$gt':order}}, {'$inc':{'order':1}}, multi=true)
        // this.newCard.order = card.order+1;
         newCard = {owner: Meteor.userId(), public: false, timestamp: new Date(), order: order+1}
            // this.newCard.owner = Meteor.userId();
            // this.newCard.event = thselectedOption;
            // this.newCard.public = false;
            // this.newCard.timestamp =  new Date();
            Cards.insert(newCard);
      return "Card inserted below "+order;
    }
  });

