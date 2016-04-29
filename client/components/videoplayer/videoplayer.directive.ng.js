// 'use strict'

angular.module('ftfKeynoteApp')
.directive('videoplayer', [function() {
	return {
    restrict: 'E',
    templateUrl: 'client/components/videoplayer/videoplayer.view.html',
    // template: '<p>{{videoCode}}</p>',
    replace: true,
    // transclude: true,
    link: function(scope,element,attrs){
    	// $(element).find('#fslPlayer').on('timeupdate',function(event){
    	// 	$("#current").text(this.currentTime);
    	// }) 
        // var v = document.getElementsByTagName('video')[0]
        // scope.videoCode = $sce.trustAsHtml(videoCodeService.videoCode);
        // scope.videoCode = '<div class="videoplayer"><div id="video-container" class="outer-container text-center">'+videoCodeService.videoCode+'<div id="nxp-ftf-video-headline-text" ><img src="/images/NXP-FTF-LOGO.png"></div></div></div>'
          // console.log ('VIDEOCODE',scope.videoCode)

        // console.log ('v - what is this for??',v)
        // scope.videoCode = videoCodeService.videoCode;
        // console.log (scope.videoCode);
        // var t = document.getElementById('current');
        // v.addEventListener('timeupdate',function(event){
        //   // t.innerHTML = parseInt(v.currentTime);
        //   Session.set('videoTime',parseInt(v.currentTime));
        // },false);
    }
  };
}]);
