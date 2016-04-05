angular.module('ftfKeynoteApp')
.directive('editCardModal', function () {
  return {
    restrict: 'E',
    scope: { card: '@'},
    templateUrl: 'client/admin/card-edit-modal.html',
    controllerAs: 'editCardModal',
    controller: function ($scope, $stateParams, $reactive, $state, $mdDialog) {
      $reactive(this).attach($scope);
      this.customMenu = [
                  ['bold', 'italic', 'underline'],
                  ['format-block'],
                  // ['font'],
                  ['font-size'],
                  // ['font-color', 'hilite-color'],
                  ['remove-format'],
                  // ['ordered-list', 'unordered-list', 'outdent', 'indent'],
                  ['left-justify', 'center-justify', 'right-justify'],
                  [/*'code',*/ 'quote', 'paragraph'],
                  ['link', 'image', 'hero']
              ];
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
              'content': this.card.content,
              'time': this.card.time,
              'public' : this.card.public,
              'order':this.card.order
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
})
.directive('showCardModal', function () {
  return {
    restrict: 'E',
    scope: { card: '@'},
    templateUrl: 'client/admin/card-code-modal.html',
    controllerAs: 'showCardModal',
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
              'content': this.card.content,
              'time': this.card.time,
              'public' : this.card.public,
              'order':this.card.order
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