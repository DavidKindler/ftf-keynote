import ngclipboard from 'ngclipboard';
// window.videoCode = null;

//       Meteor.call('meteorSettings', null, function(result){ 
//             // do something with the success result 
//             console.log ('RESULT',result)
//             window.videoCode = result
//            }, function(error){ 
//             // do something with the error
//           }
//         )

    


angular.module('ftfKeynoteApp', [
  'angular-meteor',
  'ui.router',
  'accounts.ui',
  'ui.bootstrap',
  'ngAnimate',
  'froala',
  'socialLinks',
  'updateMeta',
  'ngEncodeTweet',
  'ngclipboard'
  // 'ngSanitize'
])
.filter('html', function($sce) {
      return function(val) {
          return $sce.trustAsHtml(val);
      };
})
.filter('published', function () {
  return function(cards,timeFilter) {
    return _.filter(cards, function(card){
       return card.time <= timeFilter
    })
  }
})
// .factory('videoCodeService', function() {  
//  // console.log ('window.videoCode',window.videoCode)
//   // Meteor.call('meteorSettings', null, function(result){ 
//   //           // do something with the success result 
//   //           console.log ('RESULT',result)
//   //           window.videoCode = result

//   //          }, function(error){ 
//   //           // do something with the error
//   //         }
//   //       )
//   // console.log ('window.videoCode 2'.window.videoCode)
//   return {
//     videoCode : '<video id="fslPlayer" data-video-id="ref:RF-SAGE-VIDEO" data-account="4089003392001" data-setup=\'{"autoplay":false}\' data-player="SycMTy4e" data-embed="default" controls muted width="100%" height="100%" poster="http://media.w3.org/2010/05/sintel/poster.png"><p>Your user agent does not support the HTML5 Video element.</p></video>'

//   }
// })



onReady = function() {
  angular.bootstrap(document, ['ftfKeynoteApp']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}



