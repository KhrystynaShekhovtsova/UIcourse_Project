function goSlide(direction) {
	clearInterval(change); //to avoid timer jumps when user click the pointer
	change = setInterval("goSlide(true)", interval);

	var elems = document.getElementsByClassName("hide");
	var currentIndex = getCurrent(elems);
	elems[currentIndex].style.display = "none";

  var goCurrent = 0;
	if(direction) {
		goCurrent = next(currentIndex, elems.length);
	}else {
		goCurrent = prev(currentIndex, elems.length);
	}
	elems[goCurrent].style.display = "block";
} 

function getCurrent(elems) {
	var currentIndex = 0;
	for(var i = 0; i < elems.length; i++) {
		if(elems[i].style.display == "block") {
			currentIndex = i;
		}
	}
	return currentIndex;
}

function prev(index, elemsLength) {
	if(index == 0) {
		return elemsLength-1;
	}else {
		return index-1;
	}
}

function next(index, elemsLength) {
	if(index == elemsLength-1) {
		return 0;
	}else {
		return index+1;
	}
}

//for slider
var interval = 4000;
var change = setInterval("goSlide(true)", interval); 