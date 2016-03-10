//Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  var counter = 0;
  var splitted = str.split(" ");
  for(var i = 0; i < splitted.length; i++){
  	if(splitted[i].length > counter) {
  		counter = splitted[i].length;
  	}
  }
  return counter;
}
