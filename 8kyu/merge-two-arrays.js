//You are given two sorted arrays that contain only integers. 
// These arrays may be sorted in either ascending or descending order. 
// Your task is to merge them into a single array, ensuring that:

//The resulting array is sorted in ascending order.

//Any duplicate values are removed, so each integer appears only once.

//If both input arrays are empty, return an empty array.

//No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

//Examples (input -> output)
//* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function mergeArrays(arr1, arr2) {
let combined = arr1.concat(arr2);//google this part
  combined = new Set(combined)//saw this from a video 
  combined = Array.from(combined)
  return combined.sort((a, b) => a - b);
}
