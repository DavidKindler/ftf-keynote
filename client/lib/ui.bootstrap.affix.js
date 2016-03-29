angular.module('ui.bootstrap.affix', [])
.directive('affix', ['$window', function ($window) {
    return {
        $scope: true,
        link: function ($scope, $element, $attrs) {
            var relativeTo = // overide or use default: body (html for IE) element
                !!$attrs.relativeTo ? angular.element(window.document.getElementById($attrs.relativeTo)) : 
                    !$scope.$root.isIE ? // specify your own isIE check will default to body element
                        angular.element(window.document.getElementsByTagName('body')) : 
                        angular.element(window.document.getElementsByTagName('html')), // required by IE
                win = !!$attrs.relativeTo ? relativeTo : angular.element($window),
                // if a relativeTo other than the default is set we will 
                // offset the affixed position by it's offset
                relativeToOffset = null, 
                fixedAt = null;
            
            // boolean
            $scope.affixed = false;
            $scope.offset = 0;

            // Obviously, whenever a scroll occurs, we need to check and possibly 
            // adjust the position of the affixed $element.
            win.bind('scroll', checkPosition);

            // on resize recalculate fixedAt position 
            win.bind('resize', function () {
                $scope.$apply(function () {
                    $scope.affixed = false;
                });
                relativeToOffset = null;
                fixedAt = null;
                checkPosition();
            });

            // calculate if we need to affix element
            function checkPosition() {

                relativeToOffset = relativeToOffset || win[0].offsetTop;
                fixedAt = fixedAt || $element[0].offsetTop - relativeToOffset;
                
                $scope.$apply(function () {
                    $scope.offset = {top:relativeToOffset+'px'};
                    $scope.affixed = fixedAt <= relativeTo[0].scrollTop;                   
                });
            }
        }
    };
}]);