/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // return false if the length is not matched 
  if (str1.length != str2.length) return false;

  // lower casing everything for ease
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // creating a map for counting the frequencies of the characters
  wordsInStr1 = new Map();
  wordsInStr2 = new Map();

  // building the map
  for (let i = 0; i < str1.length; i++) {
    if (wordsInStr1.has(str1[i])) wordsInStr1[str1[i]]++;
    else wordsInStr1.set(str1[i], 1);

    if (wordsInStr2.has(str2[i])) wordsInStr2[str2[i]]++;
    else wordsInStr2.set(str2[i], 1);
  }

  // main logic
  if (wordsInStr1.size != wordsInStr2.size) return false;

  for (key of wordsInStr1.keys()) {
    if (wordsInStr2.has(key)) {
      if (wordsInStr1.get(key) != wordsInStr2.get(key)) return false;
    } else {
      return false;
    }
  }

  for (key of wordsInStr2.keys()) {
    if (wordsInStr2.has(key)) {
      if (wordsInStr1.get(key) != wordsInStr2.get(key)) return false;
    } else {
      return false;
    }
  }

  // default return after all the checks
  return true;
}
// console.log(isAnagram("abc!!", "!bac"));
module.exports = isAnagram;
