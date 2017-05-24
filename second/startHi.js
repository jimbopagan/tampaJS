// Given a string, return true if the string starts with 'hi'
// and false otherwise.

var startHi = function(str){
	var startsWithHi = /^hi/g;
	return startsWithHi.test(str);
}
