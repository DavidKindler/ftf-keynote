if (Meteor.isServer) {
  Meteor.startup(function () {
        ////////////////////////////////////////////////////////////////////
        // Create Test Users
        //
         process.env.MAIL_URL = 'smtp://' + 
            // encodeURIComponent('r12306c@freescale.com') + ':' + 
            // encodeURIComponent('xxxx') + '@' + 
            // encodeURIComponent('smtp.office365.com') + ':' + '587';
            encodeURIComponent('remotesmtp.freescale.net') + ':' + '25';

         // process.env.MONGO_URL = 'mongodb://newsfeedOwner:test123@localhost:27017/newsfeed';

        if (Meteor.users.find().fetch().length === 0) {

          console.log('Creating users: ');

          var users = [
              // {name:"Normal User",email:"normal@test.com",roles:[]},
              // {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
              {name:"Edit-Items User",email:"edit@test.com",roles:['edit-items']},
              {name:"Admin User",email:"admin@test.com",roles:['admin']},
              {name:"David Kindler",email:"david.kindler@nxp.com",roles:['admin']}
            ];

          _.each(users, function (userData) {
            var id,
                user;
            
            console.log(userData);

            id = Accounts.createUser({
              email: userData.email,
              password: "test123",
              profile: { name: userData.name }
            });

            // email verification
            Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

            // Roles.addUsersToRoles(id, userData.roles);
          
          });
        }
    });
}

Meteor.methods({
  sendEmail: function (user) {
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    
    var admins = Roles.getUsersInRole(['admin']);
    admins.forEach(function(doc){
      var emailObj = {
        to: doc.emails[0].address,
        from: 'DONOTREPLY@nxp.com',
        subject: 'New FTF2016 user created.',
        text: 'New user created in <a href="http://localhost:3000">Newsfeeds web app</a>.  Please verify user '+user.username
      }
      Meteor.defer( function(){
       var result = Email.send(emailObj);
       console.log ('sendEmailNow result to',doc.emails[0].address,result)
      });
    })
  }


});

// // Authorized users can manage user accounts
// Meteor.publish("users", function () {
//   var user = Meteor.users.findOne({_id:this.userId});

//   if (Roles.userIsInRole(user, ["admin","edit-tasks"])) {
//     // console.log('publishing users', this.userId)
//     return Meteor.users.find({}, {fields: {emails: 1, profile: 1, roles: 1}});
//   } 

//   this.stop();
//   return;
// });
