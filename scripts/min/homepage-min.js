$(document).ready(function(){function n(n,o){$(n).addClass("fadeIn"),o&&$(n).shuffleLetters(o)}function o(o,e){$(window).on("scroll",function(){var t=$(document).scrollTop(),s=Math.abs($(o).offset().top-t);530>s&&(n(o,25),setTimeout(function(){n(e,25)},1e3),$(window).off("scroll"))})}setTimeout(function(){n(".header-1",44)}),setTimeout(function(){n(".header-2",44)},700),setTimeout(function(){n(".header-3")},2500),o(".masker1",".masker2"),$(".hamburger").on("click",function(){function n(n){"WhatIDo"===n&&(console.log("what I do"),$(".main-menu").toggleClass("showIn"),$(".main-menu").children("ul").toggleClass("fadeIn"))}$(this).toggleClass("is-active"),$(".main-menu").toggleClass("showIn"),$(".main-menu").children("ul").toggleClass("fadeIn"),$(".WhatIDo").on("click",n("WhatIDo"))})});