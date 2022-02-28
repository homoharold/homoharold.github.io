window.addEventListener("load", function() {
	const logo = document.getElementById("bounce");
	const style = window.getComputedStyle(logo); // element.style only works for inline css, not external

	let limit = { // maximum position based on viewport size
		x: window.innerWidth - parseInt(style.width),
		y: window.innerHeight - (2 * parseInt(style.height))
	}; 
	var velo = {x: 1, y: 1}; // current velocity
	var pos = {x: Math.floor(Math.random() * limit.x), y: Math.floor(Math.random() * limit.y)}; // randomise position inside of limits
	
	const clamp = (num, min, max) => Math.min(Math.max(num, min), max); // clamps a number between min and max
	
	function randomiseColor() {
		logo.style.color = "#" + Math.floor(Math.random()*16777215).toString(16); // set text colour to random hex value
	}
	randomiseColor();
	
	setInterval(function() {
		limit = {
			x: window.innerWidth - parseInt(style.width), 
			y: window.innerHeight - (2 * parseInt(style.height))
		};
		
		pos.x = clamp(pos.x + velo.x, 0, limit.x);
		pos.y = clamp(pos.y + velo.y, 0, limit.y);
		
		if (pos.x >= limit.x || pos.x <= 0) {
			velo.x = -velo.x;
			randomiseColor();
		}
		if (pos.y >= limit.y || pos.y <= 0) {
			velo.y = -velo.y;
			randomiseColor();
		}
		
		logo.style.left = pos.x + "px";
		logo.style.top = pos.y + "px";
	}, 10);
})
