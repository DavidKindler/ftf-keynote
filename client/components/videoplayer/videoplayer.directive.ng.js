// 'use strict'

angular.module('ftfKeynoteApp')
.directive('videoplayer', function() {
	return {
    restrict: 'E',
    templateUrl: 'client/components/videoplayer/videoplayer.view.html',
    replace: true,
    link: function(scope,element,attrs){
    	// $(element).find('#fslPlayer').on('timeupdate',function(event){
    	// 	$("#current").text(this.currentTime);
    	// }) 
        var v = document.getElementsByTagName('video')[0]
        // var t = document.getElementById('current');
        // v.addEventListener('timeupdate',function(event){
        //   // t.innerHTML = parseInt(v.currentTime);
        //   Session.set('videoTime',parseInt(v.currentTime));
        // },false);
    }
  };
});
