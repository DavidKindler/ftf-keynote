angular.module('ftfKeynoteApp')
.directive('editCardModal', function () {
  return {
    restrict: 'E',
    scope: { card: '@'},
    templateUrl: 'client/admin/card-edit-modal.html',
    controllerAs: 'editCardModal',
    controller: function ($scope, $stateParams, $reactive, $state, $mdDialog) {
      $reactive(this).attach($scope);
      this.helpers({
        isLoggedIn: () => {
          return Meteor.userId() !== null;
        },
        card: () => {
            return Cards.findOne({_id: $scope.card});
        }
      });
 
      this.close = () => {
        $mdDialog.hide();
      }


      this.save = () => {
          Cards.update({_id: this.card._id}, {
            $set: {
              'name': this.card.name,
              'time': this.card.time,
              'public' : this.card.public
            }
          }, 
          (error) => {
            if (error) {
              console.log ('Oops, unable to update the card');
            }
            else {
              console.log ('Done');
            }
          });
          $mdDialog.hide();
          // $state.go('admin');
        };


    }
  }
});