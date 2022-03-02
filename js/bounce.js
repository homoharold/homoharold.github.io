window.addEventListener("load", function() { // wait for page to load before continuing
	const logo = document.getElementById("bounce");
	const style = window.getComputedStyle(logo); // element.style only works for inline css, not external

	let limit = { // maximum position based on viewport size
		x: window.innerWidth - parseInt(style.width),
		y: window.innerHeight - (2 * parseInt(style.height)) // weird hack to stop text going off screen - not sure how to fix this otherwise
	}; 
	var velo = {x: 1, y: 1}; // current velocity
	var pos = {x: Math.floor(Math.random() * limit.x), y: Math.floor(Math.random() * limit.y)}; // randomise position inside of limits
	
	const clamp = (num, min, max) => Math.min(Math.max(num, min), max); // clamps a number between min and max
	
	function randomiseColor() {
		logo.style.color = "#" + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16); // set text colour to random hex value
	}
	randomiseColor();
	
	setInterval(function() {
		limit = {
			x: window.innerWidth - parseInt(style.width), 
			y: window.innerHeight - (2 * parseInt(style.height))
		}; // update limits in case viewport size changed
		
		// add velocity to current position
		pos.x = clamp(pos.x + velo.x, 0, limit.x);
		pos.y = clamp(pos.y + velo.y, 0, limit.y);
		
		if (pos.x >= limit.x || pos.x <= 0) { // if on left or right border, invert x velocity
			velo.x = -velo.x;
			randomiseColor();
		}
		// can't use else if here, edge case where text hits corner would not be accounted for
		if (pos.y >= limit.y || pos.y <= 0) { // if on top or bottom border, invert y velocity
			velo.y = -velo.y;
			randomiseColor();
		}
		
		// set element position to current position in pixels
		logo.style.left = pos.x + "px";
		logo.style.top = pos.y + "px";
	}, 10);
})
