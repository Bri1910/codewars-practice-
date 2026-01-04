//Description:
//Implement a function which convert the given boolean 
// value into its string representation.

//Note: Only valid inputs will be given.
function booleanToString(b){
  return b.toString();
}
//solution#2
function booleanToString(b){
  return b ? 'true' : 'false';
}
//solution#3
function booleanToString(b){
  return String(b);
}