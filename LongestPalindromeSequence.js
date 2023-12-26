// // Given a string s, find the longest palindromic subsequence's length in s.

// // A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

// // Example 1:

// // Input: s = "bbbab"
// // Output: 4
// // Explanation: One possible longest palindromic subsequence is "bbbb".
// // Example 2:

// // Input: s = "cbbd"
// // Output: 2
// // Explanation: One possible longest palindromic subsequence is "bb".

// Intuition
// Approach
// This problem requires us to find the length of the longest subsequence that is a palindrome in a given string.

// To solve this problem, I used a recursive plus memoization approach. In this approach, I first defined a memoization table to store the results of already computed subproblems. Each subproblem is defined by a pair of indices representing the substring from index start to index end of the input string.

// Next, I defined a recursive function that takes three parameters: the start index, the end index, and the memoization table. In the recursive function, I checked the base cases where the length of the substring is either 1 or 0, and returned the appropriate value. Then, I checked if the result for the current subproblem is already present in the memo table. If it is, I returned the stored value.

// If the result is not present in the memo table, I proceeded to calculate it. If the first and last characters of the substring are the same, the result is obtained by adding 2 to the result for the substring obtained by excluding the first and last characters. If the first and last characters are different, the result is obtained by taking the maximum of the result for the substring obtained by excluding the first character and the result for the substring obtained by excluding the last character.

// After computing the result for the current subproblem, I stored it in the memo table and returned it. Finally, I called the recursive function with the appropriate parameters and returned the result.

// The time complexity of this algorithm is O(n^2), where n is the length of the input string, because we need to solve n^2 subproblems, each of which takes constant time. The space complexity is also O(n^2), because we need to store the results of all subproblems in the memoization table.

// I hope this explanation is clear and helpful. Please let me know if you have any questions. Don't forget to like please!!

const recursion = (start, end, string, memo) => {
  if (start === end) return 1;
  if (start > end) return 0;
  let key = start + "#" + end;
  let result;
  if (memo.has(key)) return memo.get(key);

  if (string[start] === string[end]) {
    result = 2 + recursion(start + 1, end - 1, string, memo);
  } else {
    result = Math.max(
      recursion(start + 1, end, string, memo),
      recursion(start, end - 1, string, memo)
    );
  }
  memo.set(key, result);
  return result;
};

function LongestPalindromeSubsequence(str) {
  console.log(str);
 
  let start = 0;
  let end = str.length - 1;
  let memo = new Map();

  let result= recursion(start, end, str, memo);

  return result;
}

let s = "b  ";
let result = LongestPalindromeSubsequence(s);
console.log(result);

//Output: 4
