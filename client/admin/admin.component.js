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
        this.subscribe('images');
        this.subscribe('finalmodal');

        // this.currentUrl = location.origin+"/#/card"
        this.currentUrl = 'http://www.nxp.com/event/ftf2016/day1/card';
        // console.log (this.currentUrl)
        this.newCard={};
        // this.showWYSIWYGCardModal = false;
        this.showAddNewCardModal = false;
        this.showEditCardModal = false;
        this.showHTMLCardModal = false;
        this.showFinalVideoModal = false;
        // this.showVideoCodeModal = false;

        // this.videoCode = VideoCodeHTML;
        // console.log ('videoCODE',this.videoCode);

         // $.FroalaEditor.DEFAULTS.key = 'eD-17ieovpH3kC-16wD6jef==';
        // this.choicePopover = {
        //    template: '<div class="form-group"><button ng-click="choicePopover.publish()" popover-is-open="popoverIsOpen" class="btn btn-sm btn-warning">Confirm publication of card</button> </div>',
        //    publish : function(){
        //      alert ("got it") 
        //      $scope.popoverIsOpen = false
        //    }
        //  };

        this.froalaOptions = {
            
            buttons:['formatBlock','bold', 'italic', 'underline', 'align', 'insertUnorderedList','createLink', 'insertImage', 'insertVideo',  'undo', 'redo',  'html'],
            // formatBlockSelection: true,
            blockTags : { 
                  N: 'Normal',
                  H1 : 'Heading 1'

            },
            // imagePaste: false,
            // imageInsert: false,
            imageInsertButtons: ['imageByURL'],
            insertImageButtons: ['imageByURL']
            // imageAllowDragAndDrop: false
          }

        this.helpers({
          getActivationKey: function(){
            return 'eD-17ieovpH3kC-16wD6jef==';
          },
          isCardAdmin: function() {
            return Roles.userIsInRole(Meteor.user(), ['edit-cards','manage-users','admin']);
          },
          images: function(){
            return ImagesURL.find({});
          },
          cards:function() {
            return Cards.find({},{sort:{time:-1}});
          },
           card: function() {
            return Cards.findOne({_id: $scope.card});
          },
          users: function() {
            return Meteor.users.find({});
          },
          isLoggedIn: function() {
            return Meteor.userId() !== null;
          },
          // videoTime: function() {
          //   // console.log ('admin videotime',Session.get('videoTime'))
          //   return Session.get('videoTime');
          // },
          availableOptions: function(){
            return [{id: '1', name: 'Keynote'}, {id: '2', name: 'Speaker 2'} ]
          },
          finalmodal : function(){ 
            return FinalModal.findOne({'public': true}) 
          },
          selectedOption: function() { return {id: '1', name: 'Keynote'} }
        });
       
        this.unpublishCard = function(card) {
          if (this.checkNetwork() ) {
            if (confirm("Are you sure you want to unpublish this card?")){ 
              Cards.update({_id: card._id}, {
                          $set: {
                            'public': false,
                            'published' : false
                          }
                        })
            }
          }
        };
        this.checkNetwork = function(){
          if(Meteor.status().connected) {
            return true
          } else {
            alert ("Network disconnected.  Operation failed.")
            return false
          }
        };

        this.toggleAddNewCardModal = function(){
            if (this.checkNetwork() ) {
              this.newCard = {}; 
              this.newCard.content = "";
              this.showAddNewCardModal = !this.showAddNewCardModal;
              // this.showEditCardModal = !this.showEditCardModal;
            }
        };
        this.toggleEditCardModal = function(card){
          // console.log ('clicked on ',this)
          this.newCard = card;
          // this.newCard.content = "";
          if (this.checkNetwork() ) {
            this.showEditCardModal = !this.showEditCardModal;
          }
        };
        this.toggleHTMLCardModal = function(card){
          // console.log ('clicked on ',this)
          this.newCard = card;
          // this.newCard.content = card.content;
          if (this.checkNetwork() ) {
            this.showHTMLCardModal = !this.showHTMLCardModal;
          }
        };
        this.toggleFinalVideoModal = function(){
          // console.log ('clicked on ',this)
          // this.newCard = card;
          // this.newCard.content = card.content;
          if (this.checkNetwork() ) {
            this.showFinalVideoModal = !this.showFinalVideoModal;
          }
        };

        
        this.processAddNewCard = function(){
          if (this.checkNetwork() ) {
            // console.log ('form clicked on', this.newCard);
            // this.newCard.order = Cards.find().count()+1;
            this.newCard.owner = Meteor.userId();
            this.newCard.event = this.selectedOption;
            this.newCard.public = false;
            this.newCard.timestamp =  new Date();
            this.newCard.published = false;
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
          }
        };

        this.updateCard = function() {
          if (this.checkNetwork() ) {
            Cards.update({_id: this.newCard._id}, {
              $set: {
                'title':this.newCard.title,
                'description':this.newCard.description,
                'image':this.newCard.image,
                'pageurl':this.newCard.pageurl,
                'content': this.newCard.content,
                'time': this.newCard.time,
                'public' : this.newCard.public,
                'order':this.newCard.order
                 // 'timestamp' : new Date()
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
          }
        };

        this.closeEditCardModal = function(){
           if (this.checkNetwork() ) {
            this.showEditCardModal = !this.showEditCardModal;
          }
        }

        this.saveHTMLCardModal = function() {
            Cards.update({_id: this.newCard._id}, {
              $set: {
                'title':this.newCard.title,
                'description':this.newCard.description,
                'image':this.newCard.image,
                'pageurl':this.newCard.pageurl,
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

        this.saveFinalVideoModal = function() {
          if (this.checkNetwork() ) {
            FinalModal.update({_id: this.finalmodal._id}, {
              $set: { 'content': this.finalmodal.content, 'timestamp' : new Date() }
            });

            this.showFinalVideoModal = !this.showFinalVideoModal;
          }
        };

        this.closeFinalVideoModal = function(){
          this.showFinalVideoModal = !this.showFinalVideoModal;
        }

        function delayPublish (card){
          // console.log ('publish card: ', card);
          Cards.update({_id: card._id}, {
            $set: {
              'public': true,
              'timestamp' : new Date()
            }
          })
        }

        function countdownTimer(card){
             $interval(function(){card.countdown--},1000,Math.round(this.delayToPublish),card);
        }

        this.setPublic = function(card) {
          if (this.checkNetwork() ) {
            this.delayToPublish=20; // In seconds
            if (confirm("This card will be published in 20 seconds.  Okay?"))
            {
              Cards.update({_id: card._id}, {$set: { 'published': true, 'timestamp' : new Date()} })
              card.countdown = Math.round(this.delayToPublish);
              $timeout(delayPublish, this.delayToPublish*1000, true, card);
              countdownTimer(card);          
            }
          }
        };

        this.removeCard = function(card) {
          // if(Meteor.status().connected) {
          if (this.checkNetwork() ) {
          if (confirm("Are you sure you want to delete this card?")) 
            { 
            console.log ('removing card',card)
            Meteor.call('CardDelete',card, 
              function (error, result) {
                if (error){
                console.error(error)
                }else{
                console.info(result)
                }
              })
            }
          }
          // } else {
          //   alert ("Network connection down.  Not Processed.")
          // }
        };
        this.addCardBelow = function(card){
            if (this.checkNetwork() ) {
            console.log ('adding card above',card)
            Meteor.call('CardAddBelow', card.order,
                function (error, result) {
                  if(error){
                    console.error(error);
                  }else{
                    console.info(result);
                  }
                });
          } 
        };

        this.addCardAbove = function(card){
          if (this.checkNetwork() ) {
           console.log ('adding card below',card)
           Meteor.call('CardAddAbove', card.order,
                function (error, result) {
                  if(error){
                    console.error(error);
                  }else{
                    console.info(result);
                  }
                });
          } 
        };

        this.addImage=function(newImage){
         if (this.checkNetwork() ) {
          Meteor.call('ImageURLAdd',newImage,
            function (error, result){
              if (error){
                console.error(error)
              } else {
                console.info(result)
              }
            })
          } 
        };

        this.removeImage=function(image){
        if (this.checkNetwork() ) {
          Meteor.call('ImageURLRemove',image,
            function (error,result){
              if (error){
                console.error(error)
              } else {
                console.info(result)
              }
            })
          } 
        }

        this.copyImage=function(image){
          console.log ('image url is',image);
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



  