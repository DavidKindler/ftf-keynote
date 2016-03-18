angular.module('ftfKeynoteApp')
.directive('facebookIcon', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/social-icons/facebook-icon.view.html',
    replace: true
  };
});