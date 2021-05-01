"use strict";
console.log('Script is online')

/*let slider1 = document.querySelector('.slider2');

let slider2 = document.querySelector('.slider3');

let slider3 = document.querySelector('.slider4');


function upXxx(x, slider){
	console.log(slider);
	qwe();
	function qwe() {
		if (x >= 1){
			return
		}else{
			x += 0.01;
			slider.style.opacity = `${x}`;
			setTimeout(qwe, 30);
		}
	};
};


function slideUp(slider){
	function upX(){
		let x = 0;
		upXxx(x, slider);
	}
	upX();
	setInterval(upX, 30000);	
}


function downXxx(x, slider){
	qwe();
	function qwe() {
		if (x <= 0){
			return
		}else{
			x -= 0.01;
			slider.style.opacity = `${x}`;
			setTimeout(qwe, 30);
		}
	};
};


function slideDown(slider){
	function downX(){
		let x = 1;
		downXxx(x, slider);
	}
	downX();
	setInterval(downX, 30000);	
}


function slide1Up(){
	slideUp(slider1);
}
function slide1Down(){
	slideDown(slider1);
}
function slide2Up(){
	slideUp(slider2);
}
function slide2Down(){
	slideDown(slider2);
}
function slide3Up(){
	slideUp(slider3);
}
function slide3Down(){
	slideDown(slider3);
}
setTimeout(slide1Up, 0);
setTimeout(slide1Down, 10000);
setTimeout(slide2Up, 10000);
setTimeout(slide2Down, 20000);
setTimeout(slide3Up, 20000);
setTimeout(slide3Down, 30000);




*/



//setInterval(slide1, 20000);

let current = 0,
    slides = document.querySelectorAll(".sloden");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 13000);

