function RecursionOnSubsequences(index, array, subSeq, n) {
  if (index === n) {
    console.log(subSeq.join(", "));
    if (subSeq.length === 0) {
      return "[]";
    }

    return;
  }

  subSeq.push(array[index]);

  RecursionOnSubsequences(index + 1, array, subSeq, n); //Take element from the array

  subSeq.pop(array[index]); //Remve the last  element from that array that you picked

  RecursionOnSubsequences(index + 1, array, subSeq, n);
}

let array = [3, 1, 2];
let index = 0;
let subSeq = [];
let n = 3; // This is the length of the array


////Time complexity is  O(2 raise to the  power of n + log N) because for every recursion call, 
//we  are calling two functions for each call and join method is log of N
// Space  complexity is O(N): Which is the stack space that need to wait.
RecursionOnSubsequences(index, array, subSeq, n);
