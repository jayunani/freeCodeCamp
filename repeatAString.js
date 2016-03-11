// Repeat a given string (first argument) num times (second argument). Return an empty 
// string if num is a negative number.

function repeat(str, num) {
  var result = str;
  	if(num < 0){
  	return "";
  	} else {
	  for(var i = 1; i < num; i++) {
	  	result += str;
	  }
	}
  return result;
}

repeat("abc", 3);
