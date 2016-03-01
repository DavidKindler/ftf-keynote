  // angular.module('iotdashboardApp').directive('partiesList', function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'client/cards/cards-list.view.ng.html',
  //     controllerAs: 'cardsList',
  //     controller: function($scope, $reactive) {
  //       $reactive(this).attach($scope);
  //       this.newCard={};
  //       this.helpers({
  //         cards: () => {
  //           return Cards.find({});
  //         }
  //       });
  //       this.addCard = () => {
  //         this.newCard.owner = Meteor.user()._id;
  //         Cards.insert(this.newCard);
  //         this.newCard = {};
  //       };
  //       this.removeCard = (party) => {
  //         Cards.remove({_id: card._id});
  //       };
  //     }
  //   }
  // });