angular.module('ftfKeynoteApp')
.controller('CardDetailCtrl', function($scope, $stateParams) {
  $scope.subscribe('cards');
  $scope.id = $stateParams.cardId;
  $scope.currentUrl = 'http://www.nxp.com/event/ftf2016/day1/card';
 
  $scope.helpers({
    cardOne: function() {
      // console.log (Cards.findOne({_id:'Z7JW8DySD42g7LANT'}));
      return Cards.findOne({ _id: $scope.id }); 
      // return Cards.findOne({ _id: $stateParams.cardId }); 
	}
  // ,
  //   cards: function() {
  //     return Cards.find({}) 
  //   }
  });
  // $scope.showModal = true;
  //  $scope.closeModal = function(){
  //         $scope.showModal = !$scope.showModal;
  //  }

})
 // .directive('clientModal', function () {
 //    return {
 //      template:  '<div class="modal fade"><div class="modal-dialog detail"><div class="modal-content"><div class="modal-body" ng-transclude></div></div></div></div>',
 //      restrict: 'E',
 //      transclude: true,
 //      replace:true,
 //      scope:true,
 //      link: function postLink(scope, element, attrs) {
 //        scope.title = attrs.title;

 //        scope.$watch(attrs.visible, function(value){
 //          if(value == true)
 //          { 
 //            $(element).modal({'show': true, 'backdrop':'static'});
 //          }
 //          else {
 //            $(element).modal('hide');
 //          }
 //        });
       
 //        $(element).on('shown.bs.modal', function(){
 //          scope.$apply(function(){
 //            scope.$parent[attrs.visible] = true;
 //          });
 //        });

 //        $(element).on('hidden.bs.modal', function(){
 //          scope.$apply(function(){
 //            scope.$parent[attrs.visible] = false;
 //          });
 //        });

 //      }
 //    };
 //  });