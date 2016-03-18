angular.module('ftfKeynoteApp')
.directive('googleplusIcon', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/social-icons/googleplus-icon.view.html',
    replace: true
  };
});