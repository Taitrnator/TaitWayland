TaitWayland.controller("ShareAndTearCtrl",function(e,a,n,t){t.get("JSON/ShareAndTear.json").then(function(a){e.data=a.data}),$(document).ready(function(){$(".hamburger").toggleClass("is-active"),$(".responsive-menu").addClass("left"),$(".hamburger").on("click",function(){$(this).toggleClass("is-active"),$(".responsive-menu").removeClass("left")})}),e.gotoTop=function(){a.hash("Top"),n()}});