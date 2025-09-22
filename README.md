<p align="center">
     <h1 align="center"> String and Methods </h1> 
</p>

```javascript
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

```
<p align="center">
     <h1 align="center"> Array </h1> 
</p>


# use of Spilec() method
syntax: array.splice(start, deleteCount, item1, item2, ...)

```javascript
 arr1 = [1,2,3,4,5,6,7,8,9];
arr1.splice(1,3,10,20,30); // removes 3 elements from index 2
console.log(arr1);
```

### Using Map(),filter()andreduce()
```javascript
/*
👉 Creates a new array by applying a function to each element.
👉array.map(callback(element, index, array))
👉 Does not modify the original array
*/
let arr7 = [1, 2, 3, 4, 5];
let arr8 = arr7.map((x) => x * 2);
console.log(arr8);
/*
👉 Creates a new array with elements that pass a condition (true/false).
👉 array.filter(callback(element, index, array));
👉 Does not modify the original array.
*/
let arr9 = arr7.filter((x) => x % 2 == 0);
console.log(arr9);

/*👉 Reduces the array to a single value by applying a function.
👉 array.reduce(callback(accumulator, currentValue)=> {....} ,initialValue);
👉 Does not modify the original array.
*/

let sum = arr7.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

```
### Qustion : write a js program to how do you check  if  an element exists in an array or not
```javascript
let  arr10 = [1, 2, 3, 4, 5];
const finds=(arr10,ele)=>{
    for(let i=0; i<arr10.length; i++){
        if(arr10[i] === ele){
            return true;
        }
    }
    return false;

}
console.log(finds(arr10,3));
console.log(finds(arr10,8));
console.log(arr10.includes(3));
console.log(arr10.includes(8));
```

### Qustion : write a js program to how do you check   Index if  an element exists in an array or not

```javascript
let arr11 = [1, 2, 3, 4, 5];
const findINdex = (arr11, ele) => {
  for (let i = 0; i < arr11.length; i++) {
    if (arr10[i] === ele) {
      return i;
    }
  }
  return -1;
};
console.log(findINdex(arr11, 3));
console.log(findINdex(arr11, 8));
console.log(arr11.indexOf(3));
console.log(arr11.indexOf(8));

```




### Question 1: write  a  js program to Ascending order and Descending order of an array

```javascript
let arr6 = [5, 3, 8, 1, 2];
arr6.sort()
arr6.reverse();
console.log(arr6);
arr6.sort((a,b)=>b-a);
console.log(arr6);
```
### Ques2; Write a program to fibonaccis number
```javascript
function  fibonacci(n) {
    let a = 0, b = 1, nextTerm;
    console.log('Fibonacci Series:');
    for (let i = 1; i <= n; i++) {
        console.log(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
}
fibonacci(10);

//Second Method

var fib = function (n) {
  var a = 0,
    b = 1,
    temp;
  if (n < 2) {
    return n;
  }
  for (var i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
};
console.log(fib(5));

```

