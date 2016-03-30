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
    CardAddNew: function (newCard) {
        highestCard = Cards.findOne({},{sort:{order:-1}, limit:1})
        newCard.order = highestCard.order+1
        // console.log ('highestCard====>',highestCard);
        // console.log ('NEW CARD====>',newCard);
        Cards.insert(newCard);
      return "Card inserted above "+newCard;
    },
    CardDelete: function(card){
        cardorder = card.order;
        Cards.remove({_id: card._id});
        for (var i =cardorder; i<= Cards.find().count()+1; i++){
          Cards.update({'order':i }, {$set: {'order':i-1}})
        }

    },
    CardAddAbove: function (cardorder) {
        // console.log ('card count',Cards.find().count(),'card order', cardorder)
        for (var i =cardorder+1; i<= Cards.find().count(); i++){
          Cards.update({'order':i }, {$set: {'order':i+1}})
        }
        // Cards.update({'order':{'$gt':cardorder}}, {'$inc':{'order':1}}, multi=true)
        newCard = {owner: Meteor.userId(), public: false, timestamp: new Date(), order: cardorder+1}
        Cards.insert(newCard);
      return "Card inserted above "+cardorder;
    },
    CardAddBelow: function (cardorder) {
        for (var i =cardorder; i<= Cards.find().count(); i++){
          Cards.update({'order':i }, {$set: {'order':i+1}})
        }

       // Cards.update({'order':{'$gt':cardorder}}, {'$inc':{'order':1}}, multi=true)
        // this.newCard.order = card.order+1;
         newCard = {owner: Meteor.userId(), public: false, timestamp: new Date(), order: cardorder}
            // this.newCard.owner = Meteor.userId();
            // this.newCard.event = thselectedOption;
            // this.newCard.public = false;
            // this.newCard.timestamp =  new Date();
            Cards.insert(newCard);
      return "Card inserted below "+cardorder;
    }
  });

