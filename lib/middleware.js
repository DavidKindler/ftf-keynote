// var fs = npm.require('fs');
// Router.map(function(){
// 	this.route('/',{
// 		path : '/(.*)',
// 		data: function(){
// 			console.log ('passed params', this.params)
// 			console.log (Cards.find({}).fetch())
// 		}
// 	})
// })

// Router.route('/(.*)',function(req,res,next){
// 	 // console.log ('do something here with id passed', this.params)
// 	 cardID = this.params[0].split('/')[1];
// 	 // console.log ('card id is ', cardID)
// 	 // Meteor.wrapAsync(function(){
// 	 // 	 console.log ('when does this run???', Cards.findOne({_id: cardID}) )
// 	 // })
// 		 // cardDetail = Cards.findOne({_id: cardID});
// 		 cardDetail = Cards.find({_id: cardID}).fetch()[0];
// 		 if (_.isUndefined(cardDetail) == false) {
// 		 console.log ('card detail',cardDetail);
// 		 console.log ('card description',_.isUndefined(cardDetail.description));
// 	   if (_.isUndefined(cardDetail.description) != true) {
// 		   $("meta[property='og\\:description']").attr("content", cardDetail.description);
// 		   $("meta[itemprop='description']").attr("content", cardDetail.description);
// 		 }
// 	   if (_.isUndefined(cardDetail.title) != true) {
// 			 document.title=cardDetail.title;
// 		   $("meta[itemprop='name']").attr("content", cardDetail.title);
// 		   $("meta[property='og\\:title']").attr("content", cardDetail.title);
// 		 }
// 	   if (_.isUndefined(cardDetail.image) != true) {
// 		   $("meta[property='og\\:image']").attr("content", cardDetail.image);
// 		   $("meta[itemprop='image']").attr("content", cardDetail.image);
// 		 }
// 	   $("meta[property='og\\:url']").attr("content", 'www.nxp.com/event/ftf2016/day1/card/'+cardDetail._id);
// 		// }
// 		}
// 	 // console.log (Cards.find().fetch())
  
// 	 // data = function()
//   // this.render('home');
// });

// Router.route("/card/:name",function(req, res, next){
// 	 console.log ('do something here with param passed', this.params.name)
// 	 // this.response.statusCode=200;
// 	 document.title="3NXP.com FTF Keynote"
// 	  // this.response.setHeader( 'access-control-allow-origin', '<Domains Here>' );
// 	 // this.next();
// 	 // this.response.end('asdasd')
// 	 // this.next();
// });


// Router.route('/(.*)',function(){
//   // document.title="adasdsa"
// }, {where: 'server'})

// middleware on the server which uses the same api as Connect
// middleware
// Router.use(function (req, res, next) {
//   // we use the connect middleware req, res objects here
//   console.log(req.method + ": " + req.url);
//   next();

//   // or, the request, response and next functions are also
//   // attached to "this": this.request, this.response, this.next()
// // }, {where: 'server'});

// Router.route('/file', function () {
//   this.response.end("here's your file...\n");
// }, {where: 'server'});


// // middlware on the client
// Router.use(function () {
//   console.log('Middleware on the client with url: ', this.url);
//   this.next();
// });

// Router.route('/', function () {
//   this.render('Home');
// });
