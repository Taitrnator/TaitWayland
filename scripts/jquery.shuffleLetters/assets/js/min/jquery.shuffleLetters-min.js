/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */
!function($){function t(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,.?/\\(^)![]{}*&^%$#'\"",a=e.split("");return a[Math.floor(Math.random()*a.length)]}$.fn.shuffleLetters=function(e){var a=$.extend({step:8,fps:45,text:"",callback:function(){}},e);return this.each(function(){var e=$(this),n="";if(e.data("animated"))return!0;e.data("animated",!0),n=a.text?a.text.split(""):e.text().split("");for(var i=[],r=[],f=0;f<n.length;f++){var s=n[f];" "!==s?r.push(f):i[f]="space"}e.html(""),function o(i){var f,s=r.length,u=n.slice(0);if(i>s)return e.data("animated",!1),void a.callback(e);for(f=Math.max(i,0);s>f;f++)f<i+a.step?u[r[f]]=t([r[f]]):u[r[f]]="";e.text(u.join("")),setTimeout(function(){o(i+1)},1e3/a.fps)}(-a.step)})}}(jQuery);