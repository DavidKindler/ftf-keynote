angular.module('ftfKeynoteApp')
.directive('emailIcon', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/social-icons/email-icon.view.html',
    replace: true
  };
});