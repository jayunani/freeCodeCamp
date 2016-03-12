// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
	if(howMany > arr.length) {
		return [];
	} else {
		arr.splice(0,howMany);
	}
	return arr;
}
