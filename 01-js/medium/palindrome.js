/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // preparing helper variables
  var sz = str.length, i = 0, j = sz-1;

  //lower casing the string
  str = str.toLowerCase();
  
  // main logic
  while (i < j) {
    // skipping if special characters
    while (i < sz && (((str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) == false))) i++;
    while (j >= 0 && ((((str[j].charCodeAt(0) >= 97 && str[j].charCodeAt(0) <= 122) == false)))) j--;

    if (str[i++] != str[j--]) return false;
  }
  return true;
}
// console.log(isPalindrome("Able, was I ere I saw Elba!"))
module.exports = isPalindrome;
