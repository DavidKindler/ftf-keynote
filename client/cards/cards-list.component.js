 
angular.module('ftfKeynoteApp')
// .factory('VideoCodeService', function() {
//   // window.videoCode = "BS";
//   window.videoCode = function() {
//    return Meteor.call('meteorSettings', null,
//              function (error, result) {
//                if(error){
//                  console.error('ERROR', error);
//                }else{
//                  console.info('RESULT',result);
//                  return  result.public.videoCodeHTML
//                }
//              })
//    }
//   return { 
//     code : window.videoCode
//   }
// })
.controller('cardsList', ['$scope', '$reactive','$timeout', function($scope, $reactive, $stateParams) {
  // $reactive(this).attach($scope);
  $scope.subscribe('publicCards');
  // $scope.$log = $log;
  $scope.currentUrl = 'http://www.nxp.com/event/ftf2016/day1/card';
  // $scope.videoCode = VideoCodeService.videoCode;
  // $log.debug('stateparams:',$stateParams);
  // $scope.subscribe('cards');
  // $scope.id = $stateParams.cardId;
  // $scope.videoCode = "BS";
 // console.log ('what is videocodeservice?',VideoCodeService)
 // $scope.videoCode = VideoCodeService.code;
 // console.log ('VideoCodeService.code',$scope.videoCode);

  $scope.helpers({
    cards: function() {
      return Cards.find({}) 
    }
    //  ,
    //  videoCode:  function() { 
    //   return Meteor.call('meteorSettings', null, function(result){ 
    //         //do something with the success result 
    //         console.log ('RESULT',result.public.videoCodeHTML)
    //         return result.public.videoCodeHTML            
    //      }, function(error){ 
    //         // do something with the error
    //      }
    //     )
    // }

    // videoCode: function(){
    //  return  Meteor.call('meteorSettings', null, function(result){ 
    //         // do something with the success result 
    //         console.log ('RESULT',result.public.videoCodeHTML)
    //         return result.public.videoCodeHTML
    //      }, function(error){ 
    //         // do something with the error
    //      }
    //     )
    //   }
  });

}]);

