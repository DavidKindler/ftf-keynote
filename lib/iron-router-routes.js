// if (Meteor.isClient) {

//  var defaults = {
//   title: 'My Site Title',                 // Will apply to <title>, Twitter and OpenGraph.
//   description: 'Some description',        // Will apply to meta, Twitter and OpenGraph.
//   image: 'http://domain.com/image.png',   // Will apply to Twitter and OpenGraph.
//   meta: {
//     keywords: ['tag1', 'tag2']
//   },
//   twitter: {
//     card: 'summary',
//     creator: '@handle'
//     // etc.
//   },
//   og: {
//     site_name: 'Your Site',
//     image: '/images/custom-opengraph.png'
//     // etc.
//   }
// };

// Router.plugin('seo', {
//   only: ['card'],
//   // except: ['someOtherRoute'],
//   defaults: defaults
// });

//  Router.route("/",function(){
//   console.log ('router.route("/") ');
//  });
//   Router.route("card",function(){
//   console.log ('router.route("/card") ');
//  });
//  Router.route("card/:_id",function(){
//   console.log ('router.route("/") ');
//  });

//  Router.route("admin",function(){
//   console.log ('router.route("/admin") ');
//  });

// }

// if (Meteor.isServer) {

// // Router.route('/',{
// //   path: '/',
// //   seo: {
// //     title : 'WTF',
// //     meta : {
// //       keywords: 'asdasdsad',
// //       author: 'wtf author'
// //     },
// //     description: 'does this fucking work??'
// //   }
// // },{where: "server"});

// // Router.route('card/:id', {
// //   path: '/card/:id',
// //   seo: {
// //     title: "FOOBAR TITLE",
// //     meta: {
// //       keywords: "meta keywords here",
// //       author: "I AM THE AUTHOR"
// //     },
// //     description: "Here is your description"
// //   }
// // },{where: "server"});

// }
