var canvas=document.getElementById("portrait"),context=canvas.getContext("2d"),img=new Image,w,h,offset,glitchInterval;img.src="./images/TaitWayland.svg",img.onload=function(){setTimeout(function(){init()},600),window.onresize=init,setTimeout(function(){closeContext()},3e3),setTimeout(function(){var t=document.getElementById("portrait-img");t.classList?t.classList.add("fadeInSoft"):t.className+=" fadeInSoft",canvas.parentNode.removeChild(canvas)},3500)};var init=function(){clearInterval(glitchInterval),canvas.width=w=200,offset=0,canvas.height=h=543,glitchInterval=setInterval(function(){clear(),context.drawImage(img,0,0,img.width,img.height,offset,0,w-2*offset,h),setTimeout(glitchImg,randInt(250,1e3),500)},500)},clear=function(){context.rect(0,0,w,h),context.fillStyle="#3A3A3A",context.fill()},closeContext=function(){clearInterval(glitchInterval),context.clearRect(0,0,w,h)},glitchImg=function(){for(var t=0;t<randInt(1,13);t++){var n=Math.random()*w,e=Math.random()*h,a=w-n,i=randInt(5,h/3);context.drawImage(canvas,0,e,a,i,n,e,a,i),context.drawImage(canvas,a,e,n,i,0,e,n,i)}},randInt=function(t,n){return~~(Math.random()*(n-t)+t)};