//  input = 2;
//  array = [2,3]
//   output = 0, 2, 3, 5

//   When no Element is TrackEvent, sum = 0
//   When only 2 is  taken , sum = 2
//   When only 3 is  taken , sum = 3

//    when both 2  and 3 are taken, sum = 5

function findSubSet(index, array, sum, result, dS) {
  // Base value
  if (index === array.length) {
    result.push(sum);
    return;
  }

  // if I pick
  dS.push(array[index]);
  sum += array[index];
  findSubSet(index + 1, array, sum, result, dS);

  // if I do not pick
  dS.pop(array.length - 1);
  sum -= array[index];
  findSubSet(index + 1, array, sum, result, dS);
}
function SubsetSumI(index, array, sum, []) {
  const result = [];
  findSubSet(index, array, sum, result, []);

  return result;
}

let array = [2, 3];

let sum = 0;
let index = 0;

//Time complexity is 2 power n  + 2 power of n log 2 power of n
//Space complexity is 2 of the power of n
let result = SubsetSumI(index, array, sum, []);

console.log(result.sort((a, b) => a - b).join(", "));
