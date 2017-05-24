// Implement the ensure function so that it throws an error if called without arguments
//or an argument is undefined. Otherwise it should return the given value.

function ensure(value) {
  if (value === undefined){
    return "value is undefined";
  }
  return value;
}







