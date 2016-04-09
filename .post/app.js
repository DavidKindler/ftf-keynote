(function(angular) {
  'use strict';
angular.module('FTFEventPost', ['ngAnimate','ngRoute','ui.bootstrap','updateMeta','EventFilters', 'socialLinks'])

.directive('emailIcon', function() {
  return {
    restrict: 'AE',
    // templateUrl: 'templates/email-icon.view.html',
    template: '<svg viewBox="0 0 512 512"><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"/></svg>',
    replace: true
  };
})

.directive('facebookIcon', function() {
  return {
    restrict: 'AE',
    // templateUrl: 'templates/facebook-icon.view.html',
    template: '<svg viewBox="0 0 512 512"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg>',
    replace: true
  };
})
.directive('googleplusIcon', function() {
  return {
    restrict: 'AE',
    // templateUrl: 'templates/googleplus-icon.view.html',
    template:'<svg viewBox="0 0 512 512"><path d="M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3"/></svg>',
    replace: true
  };
})
.directive('linkedinIcon', function() {
  return {
    restrict: 'AE',
    // templateUrl: 'templates/linkedin-icon.view.html',
    template:'<svg viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/></svg>',
    replace: true
  };
})
.directive('twitterIcon', function() {
  return {
    restrict: 'AE',
    // templateUrl: 'templates/twitter-icon.view.html',
    template: '<svg viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg>',
    replace: true
  };
})


  .controller('CardController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
      $scope.method = 'GET';
      $scope.url = 'cards.json';
      $scope.currentUrl = location.href+"card"

      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
          then(function(response) {
            $scope.status = response.status;
            $scope.data = response.data;
          }, function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        });

    }])
   .controller('CardDetailController', ['$scope', '$http', '$templateCache', '$route', '$routeParams', 
    function($scope, $http, $templateCache,  $routeParams, $route, $dialog, $uibModal) {
      $scope.method = 'GET';
      $scope.url = 'cards.json';
      $scope.$route = $route;
      $scope.cardId = $route.cardId;
      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
          then(function(response) {
            $scope.status = response.status;
            $scope.data = response.data;
            $scope.cardOne = $scope.data.filter(function( obj ) {
              return obj._id == $scope.cardId;
            })[0] || {'content': 'NO DATA'};
           
           var div = document.createElement("div");
           div.innerHTML = $scope.cardOne.content;
           // $scope.cardOne.metaContent =  div.innerText || "";
           $scope.cardOne.cardUrl=location.href;
           // $scope.cardOne.metaContent = div.textContent || div.innerText || "NO DATA";

          }, function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        });
       

    }])

  .config(function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'cards.html',
            controller: 'CardController'
        }).
        when('/:cardId', {
            templateUrl: 'card-detail.html',
            controller: 'CardDetailController'
        }).
        when('/card/:cardId', {
            templateUrl: 'card-detail.html',
            controller: 'CardDetailController'
        }).
        otherwise({
            redirectTo: '/'
        });
  })



.controller('ModalDemoCtrl', function ($scope, $uibModal, $log, $timeout) { 
  $scope.animationsEnabled = true;
  $scope.open = function (card) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modal.html',
      controller: 'ModalInstanceCtrl',
      // size: size,
      resolve: {
        cardOne: function () {
          return $scope.cardOne;
        }
      }
    });

  };

 $timeout(function() {
      // console.log ('CARDONE',$scope.cardOne.content=="NO DATA")
      if ($scope.cardOne.content!=="NO DATA") { $('#openModal').triggerHandler('click'); }
    }, 500);
})
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, cardOne, $location) {
  $scope.cardOne = cardOne;
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
    // $location.path( "/" );
  };
    
});

})(window.angular);


  angular.module('EventFilters', [])
  . filter('html', function($sce) {
      return function(val) {
          return $sce.trustAsHtml(val);
      };
  })



  // Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Gulp

// Modules
angular.module('updateMeta', []);

(function(){

  /**
   * Update a meta tag dynamically
   *
   * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
   *
   * @constructor
   */
  function UpdateMetaDirective($log) {

    function updateAttribute(selector, attributeName, attributeValue) {
      if(!document) {
        $log.error('updateMeta: document is not available!');
        return;
      }

      if (!selector) {
        $log.error('updateMeta: Either of "name", "httpEquiv", "property" or "charset" must be provided!');
        return;
      }

      var el = document.querySelector(selector);
      if (el && el.setAttribute) {
        el.setAttribute(attributeName, attributeValue);
      }
    }

    return {
      restrict: 'E',
      scope: {
        charset: '@',
        name: '@',
        content: '@',
        httpEquiv: '@',
        scheme: '@',
        property: '@',
        itemprop: '@'
      },
      link: function(scope, iElem, iAttrs) {
        var selector;

        if(scope.name) {
          selector = 'meta[name="' + scope.name + '"]';
        }

        if(scope.httpEquiv) {
          selector = 'meta[http-equiv="' + scope.httpEquiv + '"]';
        }

        if(scope.property) {
          selector = 'meta[property="' + scope.property + '"]';
        }

        if(scope.itemprop) {
          selector = 'meta[itemprop="' + scope.itemprop + '"]';
        }

        // watch the content parameter and set the changing value as needed
        scope.$watch('content', function (newValue, oldValue) {
          if (typeof newValue !== 'undefined') {
            updateAttribute(selector, 'content', scope.content);
          }
        });

        // watch the charset parameter and set it as needed
        scope.$watch('charset', function (newValue, oldValue) {
          if (typeof newValue !== 'undefined') {
            updateAttribute('meta[charset]', 'charset', scope.charset);
          }
        });
      }
    };
  }

  // Inject dependencies
  UpdateMetaDirective.$inject = ['$log'];

  // Export
  angular
    .module('updateMeta')
    .directive('updateMeta', UpdateMetaDirective);
})();

(function(){

  /**
   * Update a title dynamically
   *
   * @constructor
   */
  function UpdateTitleDirective($log) {

    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      link: function(scope, iElem, iAttrs) {

        // watch the value and set as needed
        // use document instead of $document as $document doesn't work here
        scope.$watch('title', function (newValue, oldValue) {
          if (typeof newValue !== 'undefined') {
            if(document){
              document.title = newValue;
            }
          }
        });
      }
    };
  }

  // Inject dependencies
  UpdateTitleDirective.$inject = ['$log'];

  // Export
  angular
    .module('updateMeta')
    .directive('updateTitle', UpdateTitleDirective);
})();


// https://github.com/fixate/angular-social-links
(function() {
  angular.module('socialLinks', [])
  .factory('socialLinker', [
    '$window', '$location', function($window, $location) {
      return function(urlFactory) {
        return function(scope, element, attrs) {
          var currentUrl, handler, popupWinAttrs, url;
          currentUrl = attrs.customUrl || $location.absUrl();
          url = urlFactory(scope, currentUrl);
          popupWinAttrs = "status=no, width=" + (scope.socialWidth || 640) + ", height=" + (scope.socialWidth || 480) + ", resizable=yes, toolbar=no, menubar=no, scrollbars=no, location=no, directories=no";
          if (element[0].nodeName === 'A' && ((attrs.href == null) || attrs.href === '')) {
            element.attr('href', url);
          }
          element.attr('rel', 'nofollow');
          handler = function(e) {
            var win;
            e.preventDefault();
            url = urlFactory(scope, currentUrl);
            return win = $window.open(url, 'popupwindow', popupWinAttrs).focus();
          };
          element.on('click', handler);
          return scope.$on('$destroy', function() {
            return element.off('click', handler);
          });
        };
      };
    }
  ])
  .directive('socialFacebook', [
    'socialLinker', function(linker) {
      return {
        restrict: 'ACEM',
        scope: true,
        link: linker(function(scope, url) {
          var shareUrl;
          shareUrl = ["https://facebook.com/sharer.php?"];
          shareUrl.push('app_id=113354768698255&sdk=joey&');
          shareUrl.push("u=" + (encodeURIComponent(url)));
          return shareUrl.join('');
        })
      };
    }
  ])

  .directive('socialTwitter', [
    'socialLinker', function(linker) {
      return {
        restrict: 'ACEM',
        scope: {
          status: '@status'
        },
        link: linker(function(scope, url) {
          scope.status || (scope.status = "Check this out! - " + url);
          return "https://twitter.com/intent/tweet?text=" + (encodeURIComponent(scope.status));
        })
      };
    }
  ])
  .directive('socialGplus', [
    'socialLinker', function(linker) {
      return {
        restrict: 'ACEM',
        scope: true,
        link: linker(function(scope, url) {
          return "https://plus.google.com/share?url=" + (encodeURIComponent(url));
        })
      };
    }
  ])
    .directive('socialLinkedin', [
    'socialLinker', function(linker) {
      return {
        restrict: 'ACEM',
        scope: true,
        link: linker(function(scope, url) {
          return "https://linkedin.com/shareArticle?url=" + (encodeURIComponent(url));
        })
      };
    }
  ])
}).call(this);


