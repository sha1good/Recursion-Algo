//ParameterisedFunctionalRecursion

//With Parameter
function ParameterisedFunctionalRecursion(n, sum) {
  if (n === 0) {
    return sum;
  }

  return ParameterisedFunctionalRecursion(n - 1, sum + n);
}

let n = 3;
let sum = 0;

let resu = ParameterisedFunctionalRecursion(n, sum);

console.log(resu);

//With Function

function ParameterisedWithFunctionalRecursion(k) {
  if (k === 0) return 0;

  return k + ParameterisedWithFunctionalRecursion(k - 1);
}

let k = 3;
let result = ParameterisedWithFunctionalRecursion(k);

console.log(result);

// Find the factorial of 3
function ParameterisedWithFunctionalRecursion(m) {
  if (m === 0) return 1; // So that the product value do not turn to zero

  return m * ParameterisedWithFunctionalRecursion(m - 1);
}

let m = 4;
let res = ParameterisedWithFunctionalRecursion(m);

console.log(res);
