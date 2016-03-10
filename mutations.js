// Return true if the string in the first element of the array contains all of the letters 
// of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the 
// second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not 
// contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are 
// present in "Alien".

function mutation(arr) {
  var counter = 0;
  var myObj = {};
  var first = arguments[0][0].toLowerCase().split("");
  var second = arguments[0][1].toLowerCase().split("");
  for(var i = 0; i < first.length; i++) {
  	myObj[first[i]] = 1;
  }
  for(var j = 0; j < second.length; j++) {
  	if(myObj[second[j]] !== undefined) {
  		counter += 1;
  	}
  }
  if (counter === second.length) {
  	return true;
  } else {
  	return false;
  }
}
