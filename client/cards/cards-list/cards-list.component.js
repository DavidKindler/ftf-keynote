  
  angular.module('ftfKeynoteApp').directive('partiesList', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/cards/cards-list/cards-list.html',
      controllerAs: 'cardsList',
      controller: function($scope, $reactive,  $mdDialog) {
        $reactive(this).attach($scope);
        this.subscribe('publicCards');
        // this.subscribe('images');
        this.helpers({
          parties: () => {
             return Parties.find({}) 
          }
          // ,
          // images: () => {
          //   return Images.find({});
          // }
        });
        // this.openAddNewPartyModal = function () {
        //   $mdDialog.show({
        //     template: '<add-new-party-modal></add-new-party-modal>',
        //     clickOutsideToClose: true
        //   });
        // }
      }
    }
  });


angular.module('ftfKeynoteApp').filter('published', function () {
  return function(cards,timeFilter) {
    return _.filter(cards, function(party){
       return card.time <= timeFilter
    })
  }
});

