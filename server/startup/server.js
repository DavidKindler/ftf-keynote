if (Meteor.isServer) {
  Meteor.startup(function () {
        // this needs to be run on the server
        // var environment, settings;

        // environment = process.env.METEOR_ENV || "development";

        // settings = {
        //   development: {
        //     public: {
        //       videoCode : "<h1>Development video code</h1>"
        //       },
        //     private: {}
        //   },
        //   staging: {
        //     public: {
        //       videoCode: "<h1>Staging video code</h1>"
        //     },
        //     private: {}
        //   },
        //   production: {
        //     public: {
        //       videoCode: "<h1>Production video code</h1>"
        //     },
        //     private: {}
        //   }
        // };

        // if (!process.env.METEOR_SETTINGS) {
        //   console.log("No METEOR_SETTINGS passed in, using locally defined settings.");
        //   if (environment === "production") {
        //     Meteor.settings = settings.production;
        //   } else if (environment === "staging") {
        //     Meteor.settings = settings.staging;
        //   } else {
        //     Meteor.settings = settings.development;
        //   }
        //   console.log("Using [ " + environment + " ] Meteor.settings");
        // }
        // console.log ('Meteor settings: ',Meteor.settings)
        // videoCodeHTML = Meteor.settings.public.videoCodeHTML;
        ////////////////////////////////////////////////////////////////////
        // Create Test Users
        // //
        //  process.env.MAIL_URL = 'smtp://' + 
        //     // encodeURIComponent('r12306c@freescale.com') + ':' + 
        //     // encodeURIComponent('xxxx') + '@' + 
        //     // encodeURIComponent('smtp.office365.com') + ':' + '587';
        //     encodeURIComponent('remotesmtp.freescale.net') + ':' + '25';

        
        // smtp = {
        //    username: 'nxp.ftf@gmail.com',   // eg: server@gentlenode.com
        //    password: 'Freescale1',   // eg: 3eeP1gtizk5eziohfervU
        //    server:   'smtp.gmail.com',  // eg: mail.gandi.net
        //    port: 465
        //  }

        //  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

        if (Meteor.users.find().fetch().length === 0) {

          console.log('Creating users: ');

          var users = [
              // {name:"Normal User",email:"normal@test.com",roles:[]},
              {name:"Edit Cards User",email:"edit@test.com",roles:['edit-cards']},
              {name:"Edit Tweets User",email:"tweet@test.com",roles:['edit-tweets']},
              {name:"Manage-Users User",email:"manage@test.com",roles:['manage-users']},
              {name:"Admin",email:"admin@test.com",roles:['admin']},
              {name:"kindlerdavid",email:"kindlerdavid@gmail.com",roles:['admin']},
              {name:"david",email:"david.kindler@nxp.com",roles:['admin']}
            ];

          _.each(users, function (userData) {
            var id,
                user;
            
            console.log('Adding user and role %j',userData);

            id = Accounts.createUser({
              email: userData.email,
              password: "test123",
              profile: { name: userData.name }
            });

            // email verification
            Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

            Roles.addUsersToRoles(id, userData.roles);
          
          });  // _.each
        }

        // // bootstrap the admin user if they exist -- You'll be replacing the id later
        // if (Meteor.users.findOne({"emails.address":"kindlerdavid@gmail.com"}))
        //     { 
        //         var admin1 = Meteor.users.findOne({"emails.address":"kindlerdavid@gmail.com"});
        //         Roles.addUsersToRoles(admin1._id, ['admin']);
        //     }
        // if (Meteor.users.findOne({"emails.address":"david.kindler@nxp.com"}))
        //     { 
        //         var admin1 = Meteor.users.findOne({"emails.address":"david.kindler@nxp.com"});
        //         Roles.addUsersToRoles(admin1._id, ['admin']);
        //     }
    });


    Accounts.validateNewUser(function (user) {
      // if (user.username && user.username.length >= 3)
      //   return true;
      // throw new Meteor.Error(403, "Username must have at least 3 characters");
      // console.info ('User is ',user);
      Meteor.call('sendEmail',user);
      return true;
    });
}

Meteor.methods({
   sendEmail: function (user) {
    console.log ('Sending email for user: %j', user);
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    // Email.send({
    //   from: "admin@localhost.com",
    //   to: "david.kindler@nxp.com, kindlerdavid@gmail.com",
    //   subject: "test",
    //   text: "test text"
    // })
    var admins = Roles.getUsersInRole(['admin']);
    admins.forEach(function(admin){
      var emailObj = {
        to: admin.emails[0].address,
        from: 'DONOTREPLY@nxp.com',
        subject: 'New FTF2016 user created.',
        text: 'New user created in FTF Keynote app.  Please verify user '+user.emails[0].address
      }
      Meteor.defer( function(){
       var result = Email.send(emailObj);
       console.log ('sendEmailNow result to',admin.emails[0].address,'for',user.emails[0].address)
      });
    })

  }
  // ,
  // meteorSettings: function(param){
  //     console.log ('settings: %j',videoCodeHTML);
  //       return videoCodeHTML;
  //     }
});
