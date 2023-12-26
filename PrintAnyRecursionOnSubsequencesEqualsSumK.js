function PrintAnyRecursionOnSubsequencesEqualsSumK(
  s,
  index,
  array,
  subSeq,
  n,
  sum
) {
  // if my index eqaul the

  if (index === n) {
    if (s === sum) {
      console.log(subSeq.join(", "));
      return true;
    }
    return false;
  }

  //pick the first elemet  and add it sum
  subSeq.push(array[index]);
  s += array[index];

  if (
    PrintAnyRecursionOnSubsequencesEqualsSumK(
      s,
      index + 1,
      array,
      subSeq,
      n,
      sum
    ) === true
  ) {
    return true;
  }

  //Remove the element added from the  subsequnce array
  subSeq.pop(array[index]);
  s -= array[index];
  if (
    PrintAnyRecursionOnSubsequencesEqualsSumK(s, index + 1, array, subSeq, n, sum) ===
    true
  ) {
    return true;
  }

  // if none of the condition is met, then I will return false
  return false;
}

let n = 3; // this is the  length of the array given

let array = [1, 2, 1];

let sum = 2;

let subSeq = [];
let index = 0;
let s = 0;

PrintAnyRecursionOnSubsequencesEqualsSumK(s, index, array, subSeq, n, sum);
