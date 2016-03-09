// $(document).ready(function(){
//     console.log ('starting...')
//       $("#fslPlayer").on(
//       // $("#video-active").on(
//         "timeupdate", 
//         function(event){
//           console.log ('watching video now');
//          // Session.set('currentTime',this.currentTime);
//           $("#current").text(this.currentTime);
//           // if (this.currentTime>1) {Session.set('videoStarted',true)}
//         });
//       // $('body').delegate('#fslPlayer','timeupdate',function(event){
//       //   console.log ('watching video now2...');
//       // })
// });

 $('body').delegate('#fslPlayer','timeupdate',function(event){
        console.log ('watching video now2...');
})

$('#fslPlayer').on('timeupdate',function(event){
  console.log ('watching video now3...');
});

angular.module('ftfKeynoteApp', [
  'angular-meteor',
  'ngMdIcons',
  'ui.router',
  'ngMaterial',
  // 'angularUtils.directives.dirPagination',
  'accounts.ui',
  'ui.bootstrap'
]);

onReady = function() {
  angular.bootstrap(document, ['ftfKeynoteApp']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
