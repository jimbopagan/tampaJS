// Given an int n, return True if it is within 10 of 100 or 200.
// Note: abs(num) computes the absolute value of a number.

nearHundred = function(n){
  nearHundred = function(n){
    var total = Math.abs(100-n)  <= 10 || Math.abs(200-n) <=10;
    if (total){
    	return true;
    }
    	return false;
  }
