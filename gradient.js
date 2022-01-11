var text = ""; // String
var startCol = "ffffff"; // String
var endCol = "ffffff"; // String

function clamp(start, min, max) {
	return Math.min(Math.max(this, min), max);
}

function lerp(start, end, alpha) {
	return Math.round(start + (end - start) * alpha);
}

function clerp(alpha) {
	var start = [0, 0, 0]
	var end = [0, 0, 0]
	var resultant = ""
	
	for (var i = 0; i < 6; i += 2) {
		start[i / 2] = Number("0x" + startCol.substr(i, 2));
		end[i / 2] = Number("0x" + endCol.substr(i, 2));
	}
	for (var i = 0; i < 3; i++) {
		resultant = resultant.concat(('0' + (lerp(start[i], end[i], alpha)).toString(16)).substr(-2));
	}
	return resultant;
}

function onUpdate() {
	var resultBox = document.getElementById("output")
	var result = "<div>";
	for (var i = 0; i < text.length; i++) {
		result = result.concat("<span style='color: #" + (('00000' + clerp(i / text.length)).substr(-6)) + "'>" + text[i] + "</span>");
	}
	result = result.concat("</div>")
	resultBox.innerText = result
}

function onInputChange(event, object) {
	onUpdate();
	text = object.value;
}

function onColourChange(event, object, start) {
	onUpdate();
	var startPreview = document.getElementById("startprev");
	var endPreview = document.getElementById("endprev");
	
	if (start) {
		startCol = object.value; //clamp(parseInt("0x" + object.value), 0x0, 0xffffff);
		startPreview.style.backgroundColor = '#' + ('00000' + startCol).substr(-6);
	} else {
		endCol = object.value; //clamp(parseInt("0x" + object.value), 0x0, 0xffffff);
		endPreview.style.backgroundColor = '#' + ('00000' + endCol).substr(-6);
	}
}