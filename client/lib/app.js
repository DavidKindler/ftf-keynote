import ngclipboard from 'ngclipboard';

angular.module('ftfKeynoteApp', [
  'angular-meteor',
  'ui.router',
  'accounts.ui',
  'ui.bootstrap',
  // 'textAngular',
  'froala',
  'socialLinks',
  'updateMeta',
  'ngEncodeTweet',
  'ngclipboard'
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


onReady = function() {
  angular.bootstrap(document, ['ftfKeynoteApp']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}



