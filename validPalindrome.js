var isPalindrome = function(s) {
    const formatStr = s.replace(/\W/g, '').toLowerCase(); //replace(/\W/g, '') regex to removing non-alphanumeric characters.

    return formatStr.split("").reverse().join("") === formatStr;
};

/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/
