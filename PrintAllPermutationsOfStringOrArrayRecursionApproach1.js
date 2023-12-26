//Given an array of nums of distinct integers,  return all the possible permutations.
//You can retunr the result in any order

//Example
//  nums = [1,2,3]
// Output : [1,2,3], [1,3,2],[2,1,3], [2,3,1],[3,1,2],[3,2,1]

function printePermutation(array, data, result) {
  let flag = false;
  if (data.length === array.length) {
    result.push([...data]);

    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (!data.includes(array[i])) {
      flag = true;
      data.push(array[i]);
      printePermutation(array, data, result);
      data.pop();
      flag = false;
    }
  }
}

function PrintAllPermutationsOfStringOrArrayRecursionApproach1(array, data) {
  let result = [];
  printePermutation(array, data, result);

  return result;
}

let array = [1, 2, 3];


//Time Complexity is  n! * n
// Reason: We are generating n! and  that is going to take n! times to get that done and n is the for 
// for loop from running from 0 to n
//Space complexity: O(n) + O(n) : Because I am using the using the data array to store every
 // value of permutation and using result to copy my data as well
let result = PrintAllPermutationsOfStringOrArrayRecursionApproach1(array, []);
console.log(result);
