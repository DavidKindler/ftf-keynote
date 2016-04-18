Meteor.methods({
    ImageURLAdd: function(imageURL){
      ImagesURL.insert({
        imageURL: imageURL,
        createdAt: new Date()
      })
    },
    ImageURLRemove: function(image){
      ImagesURL.remove({_id:image._id})
      return "Removed image " + image;
    }
});