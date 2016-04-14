angular.module('ftfKeynoteApp', [
  'angular-meteor',
  'ui.router',
  'accounts.ui',
  'ui.bootstrap',
  // 'textAngular',
  'froala',
  'socialLinks',
  'updateMeta',
  'ngEncodeTweet'
  // 'ngSanitize'
])
.filter('html', function($sce) {
      return function(val) {
          return $sce.trustAsHtml(val);
      };
})
.filter('published', function () {
  return function(cards,timeFilter) {
    return _.filter(cards, function(card){
       return card.time <= timeFilter
    })
  }
})
// .value('froalaConfig', {
//   toolbarInline: false,
//   placeholderText: 'Enter text here',
//   buttons : ["html", "inlineStyle", "paragraphFormat", "bold", "italic", "underline", "align",
//   "insertUnorderedList", "insertImage","insertLink","insertVideo"],
//   paragraphFormatSelection: true,
//   paragraphFormat : { 
//     N: 'Normal',
//     h1 : 'Heading 1'
//   }
// })


// .config(function($provide){
//    $provide.decorator('taOptions', ['taRegisterTool', '$delegate',
//       function(taRegisterTool, taOptions) {

//         // $delegate is the taOptions we are decorating
//         // register the tool with textAngular
//         taRegisterTool('class-a', {
//           buttontext: "A",
//           iconclass: "fa fa-square block-of-text",
//           action: function() {
//             //this.$editor().wrapSelection('formatBlock', '<SPAN CLASS="ta-a">');
//             var classApplier = rangy.createClassApplier("block-of-text", {
//               tagNames: ["*"],
//               normalize: true
//             });
//             classApplier.toggleSelection();
//           }
//         });
//         // add the button to the default toolbar definition
//         taOptions.toolbar[1].push('block-of-text');
//         return taOptions;
//     }]);
// });


onReady = function() {
  angular.bootstrap(document, ['ftfKeynoteApp']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}



