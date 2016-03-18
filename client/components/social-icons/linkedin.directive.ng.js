angular.module('ftfKeynoteApp')
.directive('linkedinIcon', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/social-icons/linkedin-icon.view.html',
    replace: true
  };
});