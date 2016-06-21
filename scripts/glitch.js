var canvas = document.getElementById("portrait");
var context = canvas.getContext("2d"),
		img = new Image(), w, h, offset, glitchInterval;

img.src = './images/portrait.png';
img.onload = function() {
  init();
	window.onresize = init;
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
	context.fill();
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
