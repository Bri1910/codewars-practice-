//Description:
//Given a random non-negative number, you have to return the digits of 
// this number within an array in reverse order.

//Example (Input => Output):
//35231 => [1,3,2,5,3]
//0     => [0]


function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

//num to string-> split it ''-> using map to go through them and convert them in Num 
//again ->and reverse it

