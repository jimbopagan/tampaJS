// Given a string, return a string made of the chars at indexes
//0,1, 4,5, 8,9 ...so 'kittens' yields 'kien'.

var altPairs=function(str) {
  var total = '';
  for(var i=0; i<str.length-1; i+=4){
      total += str[i].concat(str[i+1]);
  }
  return total;
}
console.log(altPairs('kittens'));
