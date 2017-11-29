var setGameAlphaOffset = function (evt){
	if (evt.alpha < 5 || evt.alpha > 355) {
    	window.alert("North!");
    } else if (evt.alpha < 180) {
    	window.alert("Turn Left");
    } else {
    	window.alert("Turn Right");
    }
}

window.addEventListener('deviceorientation', setGameAlphaOffset, true);
