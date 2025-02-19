/*Example 1*/
var isPalindrome = function(s) {
    const formatStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); //replace(/\W/g, '') regex to removing non-alphanumeric characters.

    return formatStr.split("").reverse().join("") === formatStr;
};

/*Example 2 - using two pointers*/
function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/
