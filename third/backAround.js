// Given a string, take the last char and return a new string with
// the last char added at the front and back, so 'cat' yields 'tcatt'/
// The original string will be length 1 or more.

var backAround = function(str){
var lastLetter = str[str.length-1];
// console.log(lastLetter);
var array1 = str.split('');
// console.log(array1);
array1.push(lastLetter);
array1.reverse();
array1.push(lastLetter);
array1.reverse();
var newString = array1.join('');
console.log(newString);

}

backAround('shoot');
backAround('monday');
backAround('hello');
