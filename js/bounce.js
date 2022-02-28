window.addEventListener("load", function() {
	const logo = document.getElementById("bounce");
	const style = window.getComputedStyle(logo);
	let size = {x: parseInt(style.width), y: parseInt(style.height)};
	let region = {x: window.innerWidth, y: window.innerHeight};
	
	var velo = {x: 1, y: 1};
	var pos = {x: 0, y: 0};
	
	const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
	
	setInterval(function() {
		size = {x: parseInt(style.width), y: parseInt(style.height)};
		region = {x: window.innerWidth, y: window.innerHeight};
		
		pos.x = clamp(pos.x + velo.x, 0, region.x - size.x);
		pos.y = clamp(pos.y + velo.y, 0, region.y - size.y);
		
		logo.style.left = pos.x + "px";
		logo.style.top = pos.y + "px";
	}, 10);
})