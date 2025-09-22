
/*
String-A string is a sequence of characters stored in memory.
*/

let str1 = "Hello, World!";
let str2 = 'JavaScript is fun.';
let str3 = `Template literals are enclosed in backticks.`;

console.log(str1);
console.log(str2);
console.log(str3);

// length of string
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// Accessing characters
console.log(str1[0]); // H
console.log(str2.charAt(5)); // c
console.log(str3[str3.length - 2]); // shouldComponentUpdate = (nextProps, nextState) => {
console.log(str2.charCodeAt(0)); // J = 74//ASCII valve
console.log(str1.includes("World")); // true
console.log(str1.indexOf("o")); // 4
console.log(str1.lastIndexOf("d")); // 11
console.log(str1.localeCompare(str2))//-1
let str4 = "Shailendra yadav is code  javascript javascript";
console.log(str4.search("Shailendra")); // 0
console.log(str4.replace("javascript", "python")); // Shailendra yadav is code python
console.log(str4.replaceAll("javascript", "CSS")); // Shailendra yadav is code css css
console.log(str4.slice(0, 10)); // Shailendra
console.log(str4.slice(-10, -2)); // Shailendra yadav is code  javascript
console.log(str4.slice(10)); // yadav is code  javascript javascript
console.log(str4.slice(-10)); // javascript
console.log(str4.substring( 1,16)); // Shailendra
console.log(str4.split(" ")); // splits the string into an array of substrings based on the specified separator (in this case, a space character)
substring = str4.split(" "); // splits the string into an array of substrings based on the specified separator (in this case, a space character).
console.log(substring.join("-")); // joins the elements of the array into a single string, with each element separated by a hyphen (-).
console.log(str4.startsWith(" Shailendra")); // true
console.log(str4.endsWith("javascript"));
console.log(str4.trim()); // removes whitespace from both ends of the string
console.log(str4.toUpperCase()); // converts the string to uppercase
console.log(str4.toLowerCase()); // converts the string to lowercase
let str6 = 123 ;
console.log(str6.toString()); // converts a number to a string
console.log(typeof String(str6)); // string
let str7 =true;
console.log(typeof String(str7)); // string
let str8 = null;
console.log(String(str8)); // "null"
let str9;
console.log(String(str9)); // "undefined"

let obj={
    name:"syed",
    age:22,
    city:"hyd"
}
console.log(JSON.stringify(obj)); // converts a JavaScript object to a JSON string
let str10 = "Hello";
console.log(str10.repeat(3)); // HelloHelloHello

// Reverse a string

var s = ["h", "e", "l", "l", "o"];
var reverseString = function (s) {
  s.reverse();
  return s;
};
console.log(reverseString(s)); // Output: ["o", "l", "l", "e", "h"]

//  write code to Anagram to strings
var isAnagram = function (s, t) {
  s = s.toLowerCase().split("").sort().join("");
  t = t.toLowerCase().split("").sort().join("");
  return s === t;
};
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

//Write a function to find the longest common prefix string amongst an array of strings.
var strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(strs));

//You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
var word1 = "abc", word2 = "pqr";
var mergeAlternately = function (word1, word2) {
  let merged = "";
  let i = 0,j = 0;
  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      merged += word1[i];
      i++;
    }
    if (j < word2.length) {
      merged += word2[j];
      j++;
    }
  }
  return merged;
};
console.log(mergeAlternately(word1, word2)); // Output: "apbqcr"


// Write a program Length of Last Word

var s = "Hello World";
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};
console.log(lengthOfLastWord(s));

// write a program to Valid Palindrome
var isPalindrome = function(s) {
    // remove non-alphanumeric and make lowercase
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // reverse string
    let reversed = s.split("").reverse().join("");
    // check palindrome
    return s === reversed;
};

// Test cases
console.log(isPalindrome("madam"));         // true
console.log(isPalindrome("racecar"));       // true
console.log(isPalindrome("hello"));         // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// write a program to reverse words in a string
var s = "the sky is blue";
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};
console.log(reverseWords(s)); // Output: "blue is sky the"


// write  a program to  reverse vowels of a string
var reverseVowels = function(s) {
    let vowels = s.match(/[aeiouAEIOU]/g); // get all vowels
    if (!vowels) return s;                 // no vowels case
    return s.replace(/[aeiouAEIOU]/g, () => vowels.pop());
};

console.log(reverseVowels("hello"));     // "holle"
console.log(reverseVowels("leetcode"));  // "leotcede"
console.log(reverseVowels("aA"));        // "Aa"
console.log(reverseVowels("IceCreAm"));  // "AmCrEeI"