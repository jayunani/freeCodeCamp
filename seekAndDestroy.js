// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of 
// the same value as these arguments.

function destroyer(arr) {
	var results = [];
	var myArr = arguments[0];
	var myObj = {};
	
	for(var i = 1; i < arguments.length; i++) {
		myObj[arguments[i]] = i;
	}
	for(var j = 0; j < myArr.length; j++){
		if (myObj[myArr[j]] === undefined) {
			results.push(myArr[j]);
		}
	}
	return results;
}
