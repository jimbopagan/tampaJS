// Given a string, return true if the string starts with 'hi'
// and false otherwise.

var startHi = function(str){
  str = str.toLowerCase();
  for(var i=0; i<str.length; i++){
    if(str[0] === 'h' && str[1] === 'i'){
      return true;
    }
  }
  return false
}


var startHi = function(str){
	var startsWithHi = /^hi/g;
	return startsWithHi.test(str);
}
