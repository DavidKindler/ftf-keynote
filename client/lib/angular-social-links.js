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
  .directive('socialFacebook2', [
    'socialLinker', function(linker) {
      return {
        restrict: 'ACEM',
        scope: {
          title: '@title',
          title: '@caption',
          description: '@description',
          image: '@image'
        },
        link: linker(function(scope, url) {
          var shareUrl;
          shareUrl = ["https://facebook.com/dialog/feed?"];
          shareUrl.push('app_id=113354768698255');
          shareUrl.push('&display=popup&locale=en_US');
          shareUrl.push('&caption='+scope.caption);
          shareUrl.push('&description='+scope.description);
          shareUrl.push('&name='+scope.title);
          shareUrl.push('&picture='+scope.image);
          shareUrl.push("&link=http://www.nxp.com");
          // shareUrl.push("&link=" + (encodeURIComponent(url)));
          shareUrl.push("&redirect_uri=http://www.nxp.com/");
          shareUrl.push("&sdk=joey")
          return shareUrl.join('');
        })
      };
    }
  ])

// 'https://www.facebook.com/dialog/feed?app_id=440562362759234&caption=mycaption&description=Awesome%20desc&display=popup&e2e=%7B%7D&link=http%3A%2F%2Fwww.phaninder.com&locale=en_US&name=Link%20name&next=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D42%23cb%3Df28e04308d6ffdc%26domain%3Drun.plnkr.co%26origin%3Dhttp%253A%252F%252Frun.plnkr.co%252Ff1cb99abf0cffe%26relation%3Dopener%26frame%3Df96f25ebd772d8%26result%3D%2522xxRESULTTOKENxx%2522&picture=https%3A%2F%2Frawgit.com%2Fpasupulaphani%2Fangular-socialsharing%2Fgh-pages-gen%2Fapp%2Fimages%2FThirsty-Planet.png&sdk=joey
// '


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