angular.module('ftfKeynoteApp')
  .directive('users', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/admin/users.html',
      controllerAs: 'adminUsersCtrl',
      controller: function ($scope, $reactive) {
        $reactive(this).attach($scope);
        this.subscribe('users');
        // this.subscribe('cards');
        // this.newCard={};
        this.helpers({
          // cards: () => {
          //   return Cards.find({},{sort:{time:-1}});
          // },
          users: function () {
            return Meteor.users.find({});
          },
          isLoggedIn: function(){
            return Meteor.userId() !== null;
          }
        });
   
      }
    }
  });
