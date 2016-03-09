//Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
	var splitted = str.split("");
	var targetLength = target.length;
	var splittedLength = splitted.length
	var result = [];
	for (var i = splittedLength - targetLength; i < splittedLength; i++){
		result.push(splitted[i]);
	}
	var final = result.join("")
	if(final === target) {
		return true;
	} else {
		return false;
	}
};
