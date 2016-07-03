TaitWayland.controller("HomeCtrl", function($scope, $http, $document) {
  $http.get('JSON/HomePage.json').then(function (res) {
    $scope.data = res.data;
    $scope.ldjson = $scope.data.ldjson;
    $(document).ready(function() {
      // cool shit with text
      function coolText(e, fps) {
           $(e).addClass("fadeIn");
           if (fps) {
             $(e).shuffleLetters(fps);
           }
      }
      // stupid unnecessary shit
       function coolMaskers(h1, h2) {
         $(window).on('scroll', function() {
           var height = $(document).scrollTop();
           var masker1height = Math.abs($(h1).offset().top - height);
           if (masker1height < 530) {
             coolText(h1, 25);
             setTimeout(function() { coolText(h2, 25); }, 1000);
             $(window).off('scroll');
          }
       });
       }

       $scope.toSection = function(e) {
         $scope.menuToggle();
         var section = angular.element(document.getElementById(e));
         $document.scrollToElementAnimated(section);

       };

      $scope.menuToggle = function() {
        $('.hamburger').toggleClass("is-active");
        $(".main-menu").toggleClass("open");
      };

      setTimeout(function() { coolText(".header-1", 44); }, 0);
      setTimeout(function() { coolText(".header-2", 44); }, 800);
      setTimeout(function() { coolText(".header-3"); }, 2500);

      coolMaskers(".masker1", ".masker2");

    });
  });
});
