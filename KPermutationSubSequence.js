// The set [1,2,3... n] contains a  total of n! unique permutations.
// By listing and labelling all the permutations in order, we get the following
// sequence for n = 3;

// 1. 1,2,3
// 2. 1,3,2
// 3. 2,1,3
// 4. 2 3 1
// 5  3 1 2
// 6 3 2 1

//  Given n * k , return  the kth permutation  sequence

//  Example 1
//     Input: n =3 , k = 3
//      Output: "213"

function printePermutation(n, used, data, result) {
  if (data.length === n) {
    return result.push([...data]);
  }

  for (let i = 1; i <= n; i++) {
    if (!used[i]) {
      used[i] = true;
      data.push(i);
      printePermutation(n, used, data, result);

      used[i] = false;
      data.pop();
    }
  }
}

function permutationSequenceBruteForceApproach(n) {
  let result = [];
  let data = [];

  let used = Array(n).fill(false);
  printePermutation(n, used, data, result);
  return result;
}

let n = 3;
let k = 3;

//Time Complexity is O(n!) * n
//Space complexity is O(n) + O (n)
let result = permutationSequenceBruteForceApproach(n);

let found = false;

function arrayEquals(array1, array2) {
  //let flag = false;

  if (array1.every((element, index) => element === array2[index])) {
    return true;
  }
  return false;
}

for (let i = 0; i < result.length; i++) {
  //   if (JSON.stringify(result[i]) === JSON.stringify(result[k - 1])) {
  //     console.log(result[i]);
  //     found = true;
  //     break;
  //   }

  if (arrayEquals(result[i], result[k - 1])) {
    console.log(result[i]);
    found = true;
    break;
  }
}

if (!found) {
  console.log([-1, -1, -1]);
}

//console.log(result);

// STEP 1:

// Mathematically speaking there can be 4 variations while generating the permutation.
// We can have our permutation starting with either 1 or 2 or 3 or 4. If the first position is already occupied by one number there are three more positions left.
// The remaining three numbers can be permuted among themselves while filling the 3 positions and will generate 3! = 6 sequences. Hence each block will have 6 permutations adding up to a total of 6*4 = 24 permutations.
// If we consider the sequences as 0-based and in the sorted form we observe:-

// The 0th – 5th permutation will start with 1
// The 6th – 11th permutation will start with 2
// The 12th – 17th permutation will start with 3
// The 18th – 23rd permutation will start with 4.
//  (For better understanding refer to the picture below.)

// We make K = 17-1 considering 0-based indexing.
// Since each of the four blocks illustrated above comprises 6 permutations, therefore, the 16th permutation will lie in (16 / 6 ) = 2nd block, and our answer is the (16 % 6) = 4th sequence from the 2nd block.
// Therefore 3 occupies the first position of the sequence and K = 4.

function permutationSequenceOptimalApproach(number, m) {
  let factorial = 1;
  let result = [];

  for (let i = 1; i < number; i++) {
    factorial = factorial * i;
    result.push(i);
  }

  //Now let us  push the last element that we need to make the first sequence of 4! complete
  result.push(number); // so, everything now will be  equals to 1, 2,3, 4

  let stringAns = "";
  m = m - 1; // the permutation at 17th index will be 16 index since computer are begins from 0th index

  while (true) {
    let newIndexToRemove = Math.floor(m / factorial);
    stringAns = stringAns + result[newIndexToRemove].toString(); // i.e = "" +   "3". we got this from "" + "1,2,3,4" or 3 + "1,2,4"
    // Check if the index is within the bounds of the  result array
    result.splice(newIndexToRemove, 1);

    //When there is no more element in the result array, 1.e we have permutated everything and store it in answers, break
    if (result.length === 0) {
      break;
    }

    m = m % factorial;
    factorial = factorial / result.length;
  }

  return stringAns;
}

let indexOfTheFactorialToReturn = 3;
let numberGivenOfFactorial = 3;
let res = permutationSequenceOptimalApproach(
  numberGivenOfFactorial,
  indexOfTheFactorialToReturn
);

console.log(res + "");
