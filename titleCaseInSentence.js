// Return the provided string with the first letter of each word capitalized. Make sure the 
// rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" 
// and "of".

function titleCase(str) {
  var splitted = str.toLowerCase().split("");
  splitted[0] = splitted[0].toUpperCase();
  for(var i = 0; i < splitted.length; i++) {
  	if(splitted[i] === " ") {
  		splitted[i+1] = splitted[i+1].toUpperCase();
  	}
  }
  return splitted.join("");
}
