//Complete the function which takes two arguments and returns all numbers which 
// are divisible by the given divisor. First argument is an array of numbers
//  and the second is the divisor.

//Example(Input1, Input2 --> Output)
//[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//function divisibleBy(numbers, divisor){
//if (numbers % divisor === 0){
//  return divisor;
 // }THIS DID NOT WORK CUZ YOU HAVE TO LOOP THROUGH EACH NUMER IN THE ARRAY
 // }so we use .filter instead
 function divisibleBy(numbers, divisor) {
  return numbers.filter(function(number) {
    return number % divisor === 0;
  });
}
//
