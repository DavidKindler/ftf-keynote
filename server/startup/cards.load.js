Meteor.startup(function() {
  if(Cards.find().count() === 0) {
    var cards = [
      {
        'content': 'card 1',
        'time' : 1,
         'timestamp' : new Date(),
         'event' : {id: '1', name: 'Keynote'},
         'order':1,
        'public': false,
        'published' : false
      },
      {
        'content': 'card 2',
        'time' : 2,
        'timestamp' : new Date(),
         'event' : {id: '1', name: 'Keynote'},
         'order':2,
        'public': false,
        'published' : false
      }
    ];
    cards.forEach(function(card) {
      Cards.insert(card);
    });
  }
  if (FinalModal.find().count() == 0) {  
    var finalModal = '<h2>Top 5 links </h2><img src="http://cache.nxp.com/files/graphic/banner/tn_pu/UNWIND-AFTER-ALL-THE-TRAINING-TN.jpg" alt="" class="img-responsive"><ul><li><a href="#">Link 1</a></li><li><a href="#">Link 2</a></li><li><a href="#">Link 3</a></li><li><a href="#">Link 4</a></li><li><a href="#">Link 5</a></li></ul>';
    FinalModal.insert ( { 
      'content' : finalModal, 
      'timestamp' : new Date(), 
      'public' : true 
    })
  }

});

Meteor.methods({
    CardAddNew: function (newCard) {
        if(Cards.find().count() === 0) {
          newCard.order =1;
          Cards.insert(newCard);
          return "First Card added";
         }
        highestCard = Cards.findOne({},{sort:{order:-1}, limit:1})
        newCard.order = highestCard.order+1
        Cards.insert(newCard);
      return "New card added";
    },
    CardDelete: function(card){
        cardorder = card.order;
        Cards.remove({_id: card._id});
        for (var i =cardorder; i<= Cards.find().count()+1; i++){
          Cards.update({'order':i }, {$set: {'order':i-1}})
        }
      return "Card deleted at "+cardorder;
    },
    CardAddAbove: function (cardorder) {
        for (var i =cardorder+1; i<= Cards.find().count(); i++){
          Cards.update({'order':i }, {$set: {'order':i+1}})
        }
        newCard = {owner: Meteor.userId(), 'public': false, 'published': false, timestamp: new Date(), order: cardorder+1}
        Cards.insert(newCard);
      return "Card inserted above "+cardorder;
    },
    CardAddBelow: function (cardorder) {
        for (var i =cardorder; i<= Cards.find().count(); i++){
          Cards.update({'order':i }, {$set: {'order':i+1}})
        }
        newCard = {owner: Meteor.userId(), 'public': false, 'published' : false,timestamp: new Date(), order: cardorder}
            Cards.insert(newCard);
      return "Card inserted below "+cardorder;
    }
  });

