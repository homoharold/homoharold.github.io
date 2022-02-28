window.addEventListener("load", function() {
	const logo = document.getElementById("bounce");
	const style = window.getComputedStyle(logo);
	let size = {x: parseInt(style.width), y: parseInt(style.height)};
	let region = {x: window.innerWidth, y: window.innerHeight};
	
	var velo = {x: 1, y: 1};
	var pos = {x: Math.floor(Math.random() * (region.x - size.x)), y: Math.floor(Math.random() * (region.y - size.y))};
	
	const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
	
	function randomiseColor() {
		logo.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
	}
	randomiseColor();
	
	setInterval(function() {
		size = {x: parseInt(style.width), y: parseInt(style.height)};
		region = {x: window.innerWidth, y: window.innerHeight};
		
		pos.x = clamp(pos.x + velo.x, 0, region.x - size.x);
		pos.y = clamp(pos.y + velo.y, 0, region.y - size.y);
		
		if (pos.x >= region.x - size.x || pos.x <= 0) {
			velo.x = -velo.x;
			randomiseColor();
		}
		if (pos.y >= region.y - size.y || pos.y <= 0) {
			velo.y = -velo.y;
			randomiseColor();
		}
		
		logo.style.left = pos.x + "px";
		logo.style.top = pos.y + "px";
	}, 10);
})
