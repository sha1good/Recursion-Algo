function LongestPalindromAnothersolution(string) {
  let maxLength = 1;
  let start = 0;

  // Edge cases
  if (string.length <= 1) {
    return string;
  }

  function expandAroundCenter(s, left, right) {
    while (
      left >= 0 &&
      right <= s.length - 1 &&
      string.charAt(left) === string.charAt(right)
    ) {
      let currentLength = right - left +  1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left; // if  my current length is greater than maxlenght, that is when I will update  the start
        // Becauase I will take a substring from start later
      }
      left--;
      right++;
    }

    
   console.log(key)
  }

  for (let i = 0; i < string.length; i++) {
    expandAroundCenter(string, i, i); //// For odd length palindromes
    expandAroundCenter(string, i, i + 1); // For even length palindromes
  }


  
  return string.substring(start, start + maxLength);
}

const inputString = "abaxyzzyxm";
const result = LongestPalindromAnothersolution(inputString);
console.log(result);
