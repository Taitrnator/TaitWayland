TaitWayland.controller("HomeCtrl",function(e,n,t){n.get("JSON/HomePage.json").then(function(n){e.data=n.data,e.ldjson=e.data.ldjson,$(document).ready(function(){function n(e,n){$(e).addClass("fadeIn"),n&&$(e).shuffleLetters(n)}function o(e,t){$(window).on("scroll",function(){var o=$(document).scrollTop(),a=Math.abs(e.offset().top-o);530>a&&(n(e,25),setTimeout(function(){n(t,25)},1e3),$(window).off("scroll"))})}$(".hamburger").toggleClass("is-active"),$(".responsive-menu").addClass("left"),$(".hamburger").on("click",function(){$(this).toggleClass("is-active"),$(".responsive-menu").removeClass("left")}),e.toSection=function(n){e.menuToggle();var o=angular.element(document.getElementById(n));t.scrollToElementAnimated(o)},e.menuToggle=function(){$(".hamburger").toggleClass("is-active"),$(".main-menu").toggleClass("open")},setTimeout(function(){n(".header-1",44)},0),setTimeout(function(){n(".header-2",44)},800),setTimeout(function(){n(".header-3")},2500),o(".masker1",".masker2")})})});