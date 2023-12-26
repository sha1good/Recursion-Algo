//Fibonnacci  Number

function MultipleRecursionCalls(n) {
  if (n <= 1) return n; // i.e f(0) = 0 and f(1) = 1

  return MultipleRecursionCalls(n - 1) + MultipleRecursionCalls(n - 2);
}

let n = 3;


//Time complexity is  O(2 raise to the  power of n) because for every recursion call, we  are calling two functions
let result = MultipleRecursionCalls(n);

console.log(result);
