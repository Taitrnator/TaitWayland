TaitWayland.controller("HomeCtrl", function($scope, $http) {
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

      setTimeout(function() { coolText(".header-1", 44); }, 100);
      setTimeout(function() { coolText(".header-2", 44); }, 700);
      setTimeout(function() { coolText(".header-3"); }, 2500);

      coolMaskers(".masker1", ".masker2");

      // menu functionality
      $(".hamburger").on('click', function() {
        $(this).toggleClass("is-active");
        $(".main-menu").toggleClass("open");
      });

        function scrollTo () {
          $('.main-menu a').click(function(e) {
            $('.hamburger').toggleClass("is-active");
            $(".main-menu").toggleClass("open");
            e.preventDefault();
            var distanceTopToSection = $( '#' +  $(this).data('target')).offset().top;
    		    $( 'body, html' ).animate({scrollTop:distanceTopToSection }, 'slow');
            });
        }

        function scrollToTop () {
          var backToTop = $('.backToTop');
          var showBackTotop = $(window).height();
          backToTop.hide();
          var children = $(".main-menu li").children();
          var tab = [];
          for (var i=0; i < children.length; i++) {
            console.log(children[i]);
            var child = children[i];
            var ahref = $(child).attr('href');
            console.log(ahref);
            tab.push(ahref);
          }

          $(window).scroll( function() {
            var windowScrollTop = $(window).scrollTop();
            if( windowScrollTop > showBackTotop  ) {
              backToTop.fadeIn('slow');
            } else {
              backToTop.fadeOut('slow');
            }

            var windowHeight = $(window).height();
            var docHeight = $(document).height();

            for (var i=0; i < tab.length; i++) {
              var link = tab[i];
              var divPos = $(link).offset().top;
              var divHeight = $(link).height();
              if (windowScrollTop >= divPos && windowScrollTop < (divPos + divHeight)) {
                    $(".mainMenu a[href='" + link + "']").addClass("active");
                  } else {
                    $(".mainMenu a[href='" + link + "']").removeClass("active");
                  }
                }

              if(windowScrollTop + windowHeight == docHeight) {
                  if (!$(".mainMenu li:last-child a").hasClass("active")) {
                    var navActive = $(".active").attr("href");
                    $(".mainMenu a[href='" + navActive + "']").removeClass("active");
                    $(".mainMenu li:last-child a").addClass("active");
                }
              }
          });

          backToTop.click( function(e) {
            e.preventDefault();
            $(' .mainMenu li a ').removeClass( 'active' );
            $(' .mainMenu li a:first ').addClass( 'active' );
            $(' body, html ').animate( {scrollTop : 0}, 'slow' );
          });
        }

        scrollTo();
        scrollToTop();
      });
  });
});
