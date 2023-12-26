function findCombination(array, index, target, ds, result) {
  //Check if the index has reached the length of the array given,
  // This si where you will now later determined whether to pick new element of not
  //And our target is equal to 0, that means I have reached my target using the array
  if (index === array.length) {
    if (target === 0) {
      result.push([...ds]);
    }

    return;
  }

  // However if it  is not equal to target and index is not equal to array.lenght

  // for (let i = index; i < array.length; i++) {
  //   // > 0
  //   if (i > index && array[i] === array[i - 1]) {
  //     //Skip duplicates to avoid duplicate combinations
  //     continue;
  //   }
  // }

  // at this point, I have picked an element  from the array
  if (array[index] <= target) {
    ds.push(array[index]);

    //since I am not allowed to pick the same  element twice
    findCombination(array, index + 1, target - array[index], ds, result);
    ds.pop(); // remove the previous element that I added
    findCombination(array, index + 1, target, ds, result);
  }

  //// at this point, I have removed the previous element added to  the ds array and move on to the next index
  //findCombination(array, index + 1, target, ds, result);
}

function combinationSum2(array, index, target, ds) {
  let result = [];
  findCombination(array, index, target, ds, result);
  return result;
}

let array = [1, 1, 1, 2, 2];
let target = 4;
let set = new Set(); // I will use set instead
let index = 0;
let ds = [];

//Time complexity is O(2 raised to power n * k * logn * logn)
let result = combinationSum2(array, index, target, ds);

//// Convert arrays to strings and use Set to store unique strings
const uniquArrayString = new Set(result.map(JSON.stringify));

// Convert  strings in the  set back to arrays
const uniquArray = Array.from(uniquArrayString, JSON.parse);

console.log(...uniquArray);

console.log("Optimal Approach");

function findCombinationOptimal(index, array, target, ds, result) {
  //The base case
  if (target === 0) {
    result.push([...ds]);
    return;
  }

  // Check for duplicate and continue  if the element in the array are the same
  for (let i = index; i < array.length; i++) {
    console.log(index);
    console.log(i);
   
    console.log("===============");
    if (i > index && array[i] === array[i - 1]) continue;
    if (array[i] > target) break; // no need for me check again

    ds.push(array[i]);
    console.log(...ds)
     console.log("After picking.....")
    findCombinationOptimal(i + 1, array, target - array[i], ds, result);

    // remove  the last element that you added before
    ds.pop();
    // findCombinationOptimal(i + 1, array, target, ds, result);
  }
}

function combinationSum2OptimalApproach(index, array, target, ds) {
  const result = [];
  //array.sort((a, b) => a - b); since the array is sorted already
  findCombinationOptimal(index, array, target, ds, result);
  return result;
}

//Time complexity is O(2 raised to power n * k )
//Space  Complexity is O(k * x) , Assuming the average length of the every combination is k and there is x number of combination
let res = combinationSum2OptimalApproach(index, array, target, ds);

// function arrayEquals(array1, array2) {
//   // This function is used to check if two arrays (arr1 and arr2) are equal.
//   // It compares their lengths and checks if each element at the corresponding index is the same.
//   return (
//     array1.length === array2.length &&
//     array1.every((value, index) => value === array2[index])
//   );
// }

// // The filter method is used on inputArray.
// // For each element (arr) at a particular index in the array (self), it checks if that element is the first occurrence of an array equal to itself in the array.
// // The findIndex method is used to find the index of the first occurrence of an array equal to the current array (arr) in the array (self). If the current index (index) is equal to this found index, it means it's the first occurrence, and the array is kept in the result (uniqueArray).
// // This effectively removes duplicates from the array.
// let uniquArrayOptimal = res.filter((element, index, orignalArrayItself) => {
//   index ===
//     orignalArrayItself.findIndex((otherArray) =>
//       arrayEquals(element, otherArray)
//     );
// });

console.log(...res);
