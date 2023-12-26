// // Given a string s, partition s such that every
// // substring
// //  of the partition is a
// // palindrome
// // . Return all possible palindrome partitioning of s.

// // Example 1:

// // Input: s = "aab"
// // Output: [["a","a","b"],["aa","b"]]
// // Example 2:

// // Input: s = "a"
// // Output: [["a"]]

// Approach: The initial idea will be to make partitions to generate substring and check if the substring generated out of the partition will be a palindrome. Partitioning means we would end up generating every substring and checking for palindrome at every step. Since this is a repetitive task being done again and again, at this point we should think of recursion. The recursion continues until the entire string is exhausted. After partitioning, every palindromic substring is inserted in a data structure When the base case has reached the list of palindromes generated during that recursion call is inserted in a vector of vectors/list of list.

// We have already discussed the initial thought process and the basic outline of the solution. The approach will get clearer with an example.

// Say s = “aabb” and assume indexes of string characters to be 0-based. For a better understanding, we have divided recursion into some steps.

// STEP 1: We consider substrings starting from the 0th index.[0,0] is a palindrome, so partition right after the 0th index.[0,1] is another palindrome, make a partition after 1st index. Beyond this point, other substrings starting from index 0 are “aab”  and “aabb”.
//These are not palindromes, hence no more. partitions are possible. The strings remaining on the right side of the partition are used as input to make recursive calls.

function isPalindrome(String, start, end) {
  let isPalindrome = true;

  while (start <= end) {
    if (String[start] !== String[end]) {
      isPalindrome = false;
    }

    start++;
    end--;
  }

  return isPalindrome;
}

function recursionPertition(index, string, path, res) {
  //if (string.length === 0) return string;
  let n = string.length;
  if (index === n) {
    res.push([...path]);
    return;
  }

  for (let i = index; i < n; i++) {
    // I will check if each string at the intended index is a palidrome
    // if it is, I will call recursion to help me partion it
    if (isPalindrome(string, index, i)) {
      path.push(string.substring(index, i + 1));
      recursionPertition(i + 1, string, path, res);
      path.pop();
    }
  }
}

function Pertition(index, inputString) {
  let result = [];
  let path = [];
  recursionPertition(index, inputString, path, result);

  return result;
}

let inputString = "aabb";

// Time Complexity: O( (2^n) *k*(n/2) )

// Reason: O(2^n) to generate every substring and O(n/2)  to check if the substring generated is a palindrome. O(k) is for inserting the palindromes in another data structure, where k  is the average length of the palindrome list.

// Space Complexity: O(k * x)

// Reason: The space complexity can vary depending upon the length of the answer. k is the average length of the list of palindromes and if we have x such list of palindromes in our final answer. The depth of the recursion tree is n, so the auxiliary space required is equal to the O(n).
let result = Pertition(0, inputString);

console.log(result);
