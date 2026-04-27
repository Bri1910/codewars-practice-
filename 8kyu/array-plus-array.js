//Description:
//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b , 0);
}
//let arr = [...arr1, ...arr2];
//The ... is called the spread operator.
//It “unpacks” the elements of each array.
//So this line creates a new array that combines both

//arr.reduce((a, b) => a + b);
//reduce() is used to turn an array into a single value.
//It loops through the array and keeps a running total.

//How it works step-by-step:

//For [1, 2, 3, 4]:

//a = 1, b = 2 → 1 + 2 = 3
//a = 3, b = 3 → 3 + 3 = 6
