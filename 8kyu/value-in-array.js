//You will be given an array a and a value x. All you need to do is check 
// whether the provided array contains the value.
//a can contain numbers or strings. x can be either.

//Return true if the array contains the value, false if not.
//this solution never though of but makes sence
//since -1 wont be in the starting array at 0
function check(a, x) {
  return a.indexOf(x) > -1;
}

function check(a, x) {
  return a.includes(x);
}