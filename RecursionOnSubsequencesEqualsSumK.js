function RecursionOnSubsequencesEqualsSumK(s, index, array, subSeq, n, sum) {
  // if my index eqaul the
  
  if (index === n) {
    if (s === sum) {
      console.log(subSeq.join(", "));
    }

    return;
  }

  //pick the first elemet  and add it sum
  subSeq.push(array[index]);
  s += array[index];

  RecursionOnSubsequencesEqualsSumK(s, index + 1, array, subSeq, n, sum);

  //Remove the element added from the  subsequnce array
  subSeq.pop(array[index]);
  s -= array[index];
  RecursionOnSubsequencesEqualsSumK(s, index + 1, array, subSeq, n, sum);
}

let n = 3; // this is the  length of the array given

let array = [1, 2, 1];

let sum = 2;

let subSeq = [];
let index = 0;
let s = 0;

RecursionOnSubsequencesEqualsSumK(s, index, array, subSeq, n, sum);
