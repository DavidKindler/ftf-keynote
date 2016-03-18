angular.module('ftfKeynoteApp')
.directive('addNewCardModal', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/admin/card-add-modal.html',
    controllerAs: 'addNewCardModal',
    link: function(scope, elem, attr) {
        console.log ('scope',scope)
        console.log('elem',elem)
        console.log ('attr',attr)
    },
    controller: function ($scope, $reactive, $mdDialog) {
      $reactive(this).attach($scope);
      this.helpers({
        isLoggedIn: function() {
          return Meteor.userId() !== null;
        },
        availableOptions: function(){
          return [{id: '1', name: 'Keynote'}, {id: '2', name: 'Speaker 2'} ]
        },
        selectedOption: function() { return {id: '1', name: 'Keynote'} }

      });
      this.newCard = {};
      this.close = function() {
        $mdDialog.hide();
      };
      this.addNewCard = function() {
        console.log (this.newCard.content)
        // this.newCard.content = this.unsafeContent;
        this.newCard.owner = Meteor.userId();
        this.newCard.event = this.selectedOption;
        this.newCard.public = false;
        this.newCard.timestamp =  new Date();
        Cards.insert(this.newCard);
        this.newCard = {};
        $mdDialog.hide();
      };
    }
  }
})
// .filter('unsafe', function($sce) { return $sce.trustAsHtml; });
