angular.module('ftfKeynoteApp')
.directive('addNewCardModal', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/admin/card-add-modal.html',
    controllerAs: 'addNewCardModal',
    controller: function ($scope, $stateParams, $reactive, $mdDialog) {
      $reactive(this).attach($scope);
 
      this.helpers({
        isLoggedIn: () => {
          return Meteor.userId() !== null;
        }
      });
 
      this.newCard = {};
      this.close = () => {
        $mdDialog.hide();
      };
      this.addNewCard = () => {
        this.newCard.owner = Meteor.userId();
        Cards.insert(this.newCard);
        this.newCard = {};
        $mdDialog.hide();
      };
    }
  }
});