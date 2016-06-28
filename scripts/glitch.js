var canvas = document.getElementById("portrait");
var context = canvas.getContext("2d"),
		img = new Image(), w, h, offset, glitchInterval;

img.src = './images/TaitWayland.svg';
img.onload = function() {
  setTimeout(function() { init(); }, 500);
	window.onresize = init;
	setTimeout(function() { closeContext(); }, 4000);
	setTimeout(function() { $(".portrait").addClass("fadeInSoft");
		$("canvas").hide();
	}, 5000);
};

var init = function() {
	clearInterval(glitchInterval);
	canvas.width = w = 200;
	offset = 0;
	canvas.height = h = 543;
	glitchInterval = setInterval(function() {
		clear();
		context.drawImage(img, 0, 0, img.width, img.height, offset, 0, w - (offset * 2), h);
		setTimeout(glitchImg, randInt(250, 1000), 500);
	}, 500);
};

var clear = function() {
	context.rect(0, 0, w, h);
	context.fillStyle = "#3A3A3A";
	context.fill();
};

var closeContext = function() {
	clearInterval(glitchInterval);
	context.clearRect(0, 0, w, h);
};

var glitchImg = function() {
	for (var i = 0; i < randInt(1, 13); i++) {
		var x = Math.random() * w;
		var y = Math.random() * h;
		var spliceWidth = w - x;
		var spliceHeight = randInt(5, h / 3);
		context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
		context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
	}
};

var randInt = function(a, b) {
	return ~~(Math.random() * (b - a) + a);
};

// makes the parallax elements
function parallaxIt() {

  // create variables
  var fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // on window scroll event
  fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  });

  // for each of content parallax element
  $('.portrait').each(function (index, e) {
    var contentObj = $(this);
    var fgOffset = parseInt(contentObj.offset().top);
    var yPos;
    var speed = (contentObj.data('speed') || 1 );

    	fwindow.on('scroll resize', function (){
      yPos = fgOffset - scrollTop / speed;

      $contentObj.css('top', yPos);
    });
  });

  // for each of background parallax element
  $('.main-header').each(function(){
    var backgroundObj = $(this);
    var bgOffset = parseInt(backgroundObj.offset().top);
    var yPos;
    var coords;
    var speed = ($backgroundObj.data('speed') || 0 );

    	fwindow.on('scroll resize', function() {
      yPos = - ((scrollTop - bgOffset) / speed);
      coords = '50% '+ yPos + 'px';

      backgroundObj.css({ backgroundPosition: coords });
    });
  });

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
};

parallaxIt();
