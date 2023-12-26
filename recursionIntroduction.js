function computeOne(count) {
  if (count === 4) return;
  console.log(count);
  count = count + 1;

  return computeOne(count);
}

function recursionIntroduction(count) {
  return computeOne(count);
}

let count = 0;
let result = recursionIntroduction(count);

console.log(result);

//Print your name n times using recursion

function printMyName(i, n) {
  if (i > n) return;

  console.log("Sheriff  Adebisi");
  return printMyName(i + 1, n);
}

//Time Complexity is O(N)
// Space or Stack Complexity = o(N)
function myName(n) {
  return printMyName(1, n);
}

let n = 3;
myName(n);

//Back tracking by printing from 1 to m

function computeOneBacktrack(i, m) {
  if (i < 1) return;

  computeOneBacktrack(i - 1, m);
  console.log(i);
  return;
}

let m = 3;
computeOneBacktrack(3, m);

 console.log("=================================")
//Backtracking by printing from n to 1


function backtTracking(k, q) {
  if (k > q) return;

  backtTracking(k + 1, q);
  console.log(k);
  return;
}

let k = 1;
backtTracking(k, 4);
