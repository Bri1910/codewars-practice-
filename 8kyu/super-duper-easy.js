//Description:
//Make a function that returns the value multiplied by 50 and 
// increased by 6. If the value entered is a string it should return
//  "Error".

function problem(x){
if(typeof x==='string'){
return 'Error';
}
  //your code here
  return x*50+6;
}


//solution#2
function problem(x){
  return typeof x === "number" ? x * 50 + 6 : "Error";
}

//solution#3
function problem(x){
  let sum = x * 50 + 6;
  if(x > 0 || x < 0 || x === 0)
  return sum
  else {
  return "Error"
}
}
