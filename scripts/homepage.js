$(document).ready(function() {
  // cool shit with text
  function coolText(e, fps) {
       $(e).addClass("fadeIn");
       if (fps) {
         $(e).shuffleLetters(fps);
       }
  }

  setTimeout(function() { coolText(".header-1", 44); });
  setTimeout(function() { coolText(".header-2", 44); }, 700);
  setTimeout(function() { coolText(".header-3"); }, 2500);

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
  coolMaskers(".masker1", ".masker2");

  // menu functionality
  $(".hamburger").on('click', function() {
    $(this).toggleClass("is-active");
    $(".main-menu").toggleClass("showIn");
    $(".main-menu").children("ul").toggleClass("fadeIn");

    $(".WhatIDo").on('click', scrollTo("WhatIDo"));

    function scrollTo(sect) {
      if (sect === "WhatIDo") {
        console.log("what I do");
        $(".main-menu").toggleClass("showIn");
        $(".main-menu").children("ul").toggleClass("fadeIn");
      }
    }

});

});
