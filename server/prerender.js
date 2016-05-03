// Use Prerender with your token
var prerenderio = Npm.require('prerender-node').set('prerenderToken', '28Ox9IDvKnZHjdhfD2hQ'); 
// var prerenderio= Npm.require('prerender-node').set('prerenderServiceUrl', 'http:'));
// Feed it to middleware! (app.use)
WebApp.connectHandlers.use(prerenderio);