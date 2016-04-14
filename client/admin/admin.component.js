  angular.module('ftfKeynoteApp')
  .directive('admin', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/admin/admin.html',
      controllerAs: 'adminCtrl',
      controller: function ($scope, $stateParams, $reactive, $state, $timeout, $interval) {


        $reactive(this).attach($scope);
        this.subscribe('users');
        this.subscribe('cards');
        this.currentUrl = location.origin+"/#/card"
        // console.log (this.currentUrl)
        this.newCard={};
        // this.showWYSIWYGCardModal = false;
        this.showAddNewCardModal = false;
        this.showEditCardModal = false;
        this.showHTMLCardModal = false;
        // this.customMenu = [
        //                   ['bold', 'italic', 'underline'],
        //                   ['format-block'],
        //                   // ['font'],
        //                   // ['font-size'],
        //                   // ['font-color', 'hilite-color'],
        //                   ['remove-format'],
        //                   // ['ordered-list', 'unordered-list', 'outdent', 'indent'],
        //                   ['left-justify', 'center-justify', 'right-justify'],
        //                   [/*'code',*/ 'quote', 'paragraph'],
        //                   ['link', 'image', 'hero']
        //               ];
        // this.froalaOptions = {
 //            buttons : ["html", "inlineStyle", "paragraphFormat", "bold", "italic", "underline", "align",
 //            "insertUnorderedList", "insertImage","insertLink","insertVideo"],
 //            paragraphFormatSelection: true,
 //            paragraphFormat : { 
 //              N: 'Normal',
 //              h1 : 'Heading 1'
 //            },
 //            inlineStyles : {
 //              'H1' : 'font-size:24px; font-color: orange;'
 //            }
 //          }

        this.helpers({
          cards:function() {
            return Cards.find({},{sort:{time:-1}});
          },
           card: () => {
            return Cards.findOne({_id: $scope.card});
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
       
        this.unpublishCard = function(card) {
          if (confirm("Are you sure you want to unpublish this card?")){ 
            Cards.update({_id: card._id}, {
                        $set: {
                          'public': false
                        }
                      })
          }
        };
        
        this.toggleAddNewCardModal = function(){
            this.newCard = {}; 
            this.newCard.content = "";
            this.showAddNewCardModal = !this.showAddNewCardModal;
            // this.showEditCardModal = !this.showEditCardModal;
        };
        this.toggleEditCardModal = function(card){
          // console.log ('clicked on ',this)
          this.newCard = card;
          // this.newCard.content = "";
          this.showEditCardModal = !this.showEditCardModal;
        };
        this.toggleHTMLCardModal = function(card){
          // console.log ('clicked on ',this)
          this.newCard = card;
          // this.newCard.content = card.content;
          this.showHTMLCardModal = !this.showHTMLCardModal;
        };

        this.processAddNewCard = function(){
          // console.log ('form clicked on', this.newCard);
          // this.newCard.order = Cards.find().count()+1;
          this.newCard.owner = Meteor.userId();
          this.newCard.event = this.selectedOption;
          this.newCard.public = false;
          this.newCard.timestamp =  new Date();
          // Cards.insert(this.newCard);
          Meteor.call('CardAddNew', this.newCard,
             function (error, result) {
               if(error){
                 console.error(error);
               }else{
                 console.info(result);
               }
             });
          this.newCard = {};
          this.newCard.content = "";
          this.showAddNewCardModal = !this.showAddNewCardModal;
        };

        this.updateCard = function() {
            Cards.update({_id: this.newCard._id}, {
              $set: {
                'title':this.newCard.title,
                'description':this.newCard.description,
                'image':this.newCard.image,
                'content': this.newCard.content,
                'time': this.newCard.time,
                'public' : this.newCard.public,
                'order':this.newCard.order
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
            this.newCard = {};
            this.newCard.content = "";
            this.showEditCardModal = !this.showEditCardModal;
            // $state.go('admin');
        };

        this.closeEditCardModal = function(){
          this.showEditCardModal = !this.showEditCardModal;
        }

        this.saveHTMLCardModal = function() {
            Cards.update({_id: this.newCard._id}, {
              $set: {
                'title':this.newCard.title,
                'description':this.newCard.description,
                'image':this.newCard.image,
                'content': this.newCard.content,
                'time': this.newCard.time,
                'public' : this.newCard.public,
                'order':this.newCard.order
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
            this.newCard = {};
            this.newCard.content = "";
            this.showHTMLCardModal = !this.showHTMLCardModal;
            // $state.go('admin');
        };

        this.closeHTMLCardModal = function(){
          this.showHTMLCardModal = !this.showHTMLCardModal;
        }

        function delayPublish (card){
          // console.log ('publish card: ', card);
          Cards.update({_id: card._id}, {
            $set: {
              'public': true
            }
          })
        }

        function countdownTimer(card){
             $interval(function(){card.countdown--},1000,Math.round(this.delayToPublish),card);
        }

        this.setPublic = function(card) {
          this.delayToPublish=10; // In seconds
          if (confirm("This card will be published in 20 seconds.  Okay?"))
          {
            card.countdown = Math.round(this.delayToPublish);
            $timeout(delayPublish, this.delayToPublish*1000, true, card);
            countdownTimer(card);          
          }
        };

        this.removeCard = function(card) {
          if (confirm("Are you sure you want to delete this card?")) 
          { 
            Meteor.call('CardDelete',card, 
              function (error, result) {
                if (error){
                console.error(error)
                }else{
                console.info(result)
                }
              })
            }
        };
        this.addCardBelow = function(card){
             Meteor.call('CardAddBelow', card.order,
                function (error, result) {
                  if(error){
                    console.error(error);
                  }else{
                    console.info(result);
                  }
                });
        };

        this.addCardAbove = function(card){
           Meteor.call('CardAddAbove', card.order,
                function (error, result) {
                  if(error){
                    console.error(error);
                  }else{
                    console.info(result);
                  }
                });

        }

      }
    }
  })
   .directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                // '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
          { 
            $(element).modal({'show': true, 'backdrop':'static'});
          }
          else {
            $(element).modal('hide');
          }
        });
       
        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });

      }
    };
  });



  