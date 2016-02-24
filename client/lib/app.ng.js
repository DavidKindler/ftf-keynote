angular.module('iotdashboardApp', [
  'angular-meteor',
  'ngMdIcons',
  'ui.router',
  'ngMaterial',
  'angularUtils.directives.dirPagination',
  'accounts.ui',
  'ui.bootstrap'
]);

onReady = function() {
  angular.bootstrap(document, ['iotdashboardApp']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
