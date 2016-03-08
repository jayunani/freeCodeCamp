// Return an array consisting of the largest number from each provided sub-array. For 
// simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member 
// with array syntax arr[i].

function largestOfFour(arr) {
	var finalArr = [];
	for(var i = 0; i < arr.length; i++) {
		finalArr.push(arr[i].reduce(function(a,b){
			return Math.max(a,b);
		},0));
	}
	return finalArr;
}
