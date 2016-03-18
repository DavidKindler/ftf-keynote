angular.module('ftfKeynoteApp')
.directive('twitterIcon', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/social-icons/twitter-icon.view.html',
    replace: true
  };
});