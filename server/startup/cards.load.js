Meteor.startup(function() {
  if(Cards.find().count() === 0) {
    // var cards = [
    //   {
    //     'content': 'card 1',
    //      'timestamp' : new Date(),
    //      'event' : {id: '1', name: 'Keynote'},
    //      'order':1,
    //     'public': false,
    //     'published' : false
    //   },
    //   {
    //     'content': 'card 2',
    //     'timestamp' : new Date(),
    //      'event' : {id: '1', name: 'Keynote'},
    //      'order':2,
    //     'public': false,
    //     'published' : false
    //   }
    // ];
    // cards.forEach(function(card) {
    //   Cards.insert(card);
    // });
    for (var i = 1; i <=20; i++){
      Cards.insert({
        'content': i.toString(),
        'timestamp': new Date(),
        'order': i,
        'public': false,
        'published' : false

      })
    }
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
   CardReset: function(){
      Cards.remove({});
      for (var i = 1; i <=20; i++){
        Cards.insert({
          'content': i.toString(),
          'timestamp': new Date(),
          'order': i,
          'public': false,
          'published' : false

        })
      }
      console.log ("dropped all cards")
      return "Dropped all cards"
   },
    CardAddNew: function (newCard) {
        if(Cards.find().count() === 0) {
          newCard.order =parseInt(1);
          Cards.insert(newCard);
          return "First Card added";
         }
        highestCard = Cards.findOne({},{sort:{order:-1}, limit:1}, function(err,result){
              if (err) {console.log(err); return;}
        })
        newCard.order = parseInt(highestCard.order)+1
        Cards.insert(newCard);
      return "New card added";
    },
    CardDelete: function(card){
        cardorder = parseInt(card.order);
        Cards.remove({_id: card._id});
        //  highestCard = Cards.findOne({},{sort:{order:-1}, limit:1}, function(err,result){
        //       if (err) {console.log(err); return;}
        // })
        var cardCursor = Cards.find({'order':{$gte: cardorder}})
        cardCursor.forEach(function(card){
          card.order= card.order-1;
          console.log ('Card deleted - updated',card._id, card.order)
          Cards.update({_id:card._id}, {$set:{"order":card.order}})
        })
        // for (let i =parseInt(cardorder); i<= parseInt(highestCard.order)+1; i++){
        //   var card = Cards.findOne({'order':i});

        //   Cards.update({_id:card._id }, {$set: {'order':parseInt(i)}}, function(err,result){
        //       if (err) {console.log(err); return;}
        //   })
        // }
      return "Card deleted at "+cardorder;
    },
    CardAddAbove: function (cardorder) {
        // highestCard = Cards.findOne({},{sort:{order:-1}, limit:1}, function(err,result){
        //       if (err) {console.log(err); return;}
        // })
        var cardCursor = Cards.find({'order':{$gte: parseInt(cardorder)}})
        cardCursor.forEach(function(card){
          card.order= card.order+1;
          console.log ('Card add above - updated',card._id, card.order)
          Cards.update({_id:card._id}, {$set:{"order":card.order}})
        })
        // for (let i =parseInt(cardorder); i<= parseInt(highestCard.order); i++){
        //   var card = Cards.findOne({'order':i});         
        //   Cards.upsert({'_id':card._id }, {$inc: {'order':1}}, function(err,result){
        //       console.log ('card ',i, ' updated to ', i+1)
        //       console.log ('card update result',result)
        //       if (err) {console.log(err); return;}
        //   })
        // }
        Cards.insert({owner: Meteor.userId(), 'public': false, 'published': false, timestamp: new Date(), order: parseInt(cardorder)});
      return "Card inserted above "+cardorder;
    },
    CardAddBelow: function (cardorder) {
        // highestCard = Cards.findOne({},{sort:{order:-1}, limit:1}, function(err,result){
        //       if (err) {console.log(err); return;}
        // })
        // console.log (cardorder,highestCard.order);
        var cardCursor = Cards.find({'order':{$gt: parseInt(cardorder)}})
        cardCursor.forEach(function(card){
          card.order= card.order+1;
          console.log ('Card add below - updated',card._id, card.order)
          Cards.update({_id:card._id}, {$set:{"order":card.order}})
        })
        // for (let i=parseInt(cardorder)+1; i<= highestCard.order; i++){
        //   // console.log ('updating card',i)
        //  var card = Cards.findOne({'order':i});         
        //   Cards.upsert({'_id':card._id }, {$inc: {'order':1}}, function(err,result){
        //     console.log ('card ',i, ' updated to ', i+1)
        //     console.log ('card update result',result)
        //     if (err) {console.log(err); return;}
        //   })
        // }
        Cards.insert({owner: Meteor.userId(), 'public': false, 'published' : false,timestamp: new Date(), order: parseInt(cardorder)+1});
      return "Card inserted below "+cardorder;
    }
  });

