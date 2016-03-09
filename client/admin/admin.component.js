
// angular.module('ftfKeynoteApp')
// .controller('AdminCtrl', function($scope, $stateParams) {


// });


  angular.module('ftfKeynoteApp')
  .directive('admin', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/admin/admin.html',
      controllerAs: 'adminCtrl',
      controller: function ($scope, $stateParams, $reactive, $state, $mdDialog) {
        $reactive(this).attach($scope);
        this.subscribe('users');
        this.subscribe('cards');
        this.newCard={};
        this.helpers({
          cards: () => {
            return Cards.find({},{sort:{time:-1}});
          },
          users: () => {
            return Meteor.users.find({});
          },
          isLoggedIn: () => {
            return Meteor.userId() !== null;
          }
        });
        this.removeCard = (card) => {
          Cards.remove({_id: card._id});
        };
        
        this.openAddNewCardModal = function () {
          $mdDialog.show({
            template: '<add-new-card-modal></add-new-card-modal>',
            clickOutsideToClose: true
         });
        };
        this.editCardModal = function (card) {
          // console.log ('party is ',party)
          $mdDialog.show({
            template: '<edit-card-modal card='+card._id+'></edit-card-modal>',
            clickOutsideToClose: true
            // locals: {Party: party}
         });
        };

        this.save = () => {
          Cards.update({_id: $stateParams.cardId}, {
            $set: {
              content: this.card.content,
              time: this.card.time,
              'public' : this.card.public
              // time: new Date()
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
          $state.go('admin');
        };
      }
    }
  });
