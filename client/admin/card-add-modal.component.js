angular.module('ftfKeynoteApp')
.directive('addNewCardModal', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/admin/card-add-modal.html',
    controllerAs: 'addNewCardModal',
    controller: function ($scope, $stateParams, $reactive, $mdDialog) {
      $reactive(this).attach($scope);
 
      this.helpers({
        isLoggedIn: function() {
          return Meteor.userId() !== null;
        }
      });
 
      this.newCard = {};
      this.close = function() {
        $mdDialog.hide();
      };
      this.addNewCard = function() {
        this.newCard.owner = Meteor.userId();
        Cards.insert(this.newCard);
        this.newCard = {};
        $mdDialog.hide();
      };
    }
  }
});