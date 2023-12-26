function CountPrintAnyRecursionOnSubsequencesEqualsSumK(
  s,
  index,
  array,
  subSeq,
  n,
  sum
) {

//Condtion not  satisfied
//Strictly done if array contains positive elements only.
  if( s > sum)  return 0;

  // if my index eqaul the
  if (index === n) {
    if (s === sum) {
      return 1;
    }
    return 0;
  }

  //pick the first elemet  and add it sum
  subSeq.push(array[index]);
  s += array[index];

  let left = CountPrintAnyRecursionOnSubsequencesEqualsSumK(
    s,
    index + 1,
    array,
    subSeq,
    n,
    sum
  );

  //Remove the element added from the  subsequnce array
  subSeq.pop(array[index]);
  s -= array[index];
  let right = CountPrintAnyRecursionOnSubsequencesEqualsSumK(
    s,
    index + 1,
    array,
    subSeq,
    n,
    sum
  );

  // if none of the condition is met, then I will return false
  return left + right;
}

let n = 3; // this is the  length of the array given

let array = [1, 2, 1];

let sum = 2;

let subSeq = [];
let index = 0;
let s = 0;

let result = CountPrintAnyRecursionOnSubsequencesEqualsSumK(
  s,
  index,
  array,
  subSeq,
  n,
  sum
);
console.log(result);


// for  multiple recursion call.

// let s = 0;
//  for(let i=0; i < n; i++){
//    s+= fn()
//  }

//  return s
