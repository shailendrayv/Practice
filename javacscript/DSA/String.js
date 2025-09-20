
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
let str4 = "     Shailendra yadav is code  javascript javascript ";
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






