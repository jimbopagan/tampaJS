// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.

var diff21 = function(n){
  var total = Math.abs(n-21);
  if(n < 21){
    return  total;
  } else if (n>21){
    return total * 2;
  }
}

console.log(diff21(12));
console.log(diff21(22));
console.log(diff21(2));
