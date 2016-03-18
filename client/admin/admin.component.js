
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
        this.currentUrl = location.origin+"/#/card"
        // console.log ('url',this.currentUrl)
        this.newCard={};
        this.helpers({
          cards:function() {
            return Cards.find({},{sort:{time:-1}});
          },
          users: function() {
            return Meteor.users.find({});
          },
          isLoggedIn: function() {
            return Meteor.userId() !== null;
          },
          videoTime: function() {
            // console.log ('admin videotime',Session.get('videoTime'))
            return Session.get('videoTime');
          },
          availableOptions: function(){
            return [{id: '1', name: 'Keynote'}, {id: '2', name: 'Speaker 2'} ]
          },
          selectedOption: function() { return {id: '1', name: 'Keynote'} }
        });
        this.removeCard = function(card) {
          if (confirm("Are you sure you want to delete this card?")){ 
            Cards.remove({_id: card._id});
          }
        };
        // this.timestampCard = function(card){
        //   Car
        // }
        this.openAddNewCardModal = function () {
          $mdDialog.show({
            template: '<add-new-card-modal></add-new-card-modal>',
            clickOutsideToClose: true
         });
        };
        this.editCardModal = function (card) {
          $mdDialog.show({
            template: '<edit-card-modal card='+card._id+'></edit-card-modal>',
            clickOutsideToClose: true
         });
        };

        this.setTime = function(card) {
          Cards.update({_id: card._id}, {
            $set: {
              // content: this.card.content,
              time: Session.get('videoTime')
              // 'public' : this.card.public
              // time: new Date()
            }
          })
        };

        this.setPublic = function(card) {
          Cards.update({_id: card._id}, {
            $set: {
              // content: this.card.content,
              'public': true
              // 'public' : this.card.public
              // time: new Date()
            }
          })
        };

      }
    }
  });
