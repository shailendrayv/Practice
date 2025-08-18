// Reverse  Strings in JavaScript
function reverse(str) {
  return String(str).split("").reverse().join("");
}
console.log(reverse("Shailendra")); // Output: "ardneliahS"
console.log(reverse(12334445)); // Output: "54443321"

// factorial of a number
let a = prompt("Enter fact ");
function cal(a) {
  if (a < 0) {
    throw new Error("not less than Zero");
  }
  let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(cal(a));

// Is leap year or not

let leap = prompt("Enter the year ");
function year() {
  if (leap % 4 === 0) {
    return "Leap Year";
  } else {
    return "Not Lear Year";
  }
}
console.log(year(leap));

// write function  that calculate  the sum of  digits of a number

let No = 7875;
function sum(n) {
  let sum = 0;
  n.toString()
    .split("")
    .forEach(function (v) {
      sum += Number(v);
    });
  return sum;
}

console.log(sum(No)); //

//write multiplication table of a number
let mul = 3;
function Mul(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
Mul(mul);

//write maximum and minimum number in an array
let arr = [1, 2, 34, 5, 6, 7, 8];

function MaxArr(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

console.log(MaxArr(arr));

// Or max number

let arr1 = [1, 2, 34, 5, 6, 7, 8];
function MaxArr(arr) {
  const maxNo = Math.max(...arr);
  return maxNo;
}
console.log(MaxArr(arr1));

//write pilandrome number

let Pilandrome = prompt("Enter the Number");

function Pdrome(str) {
  num = Number(str); // Convert input to a number
  let original = num;
  let reverse = 0;

  while (num > 0) {
    let reminder = num % 10;
    num = Math.floor(num / 10);
    reverse = reverse * 10 + reminder;
  }

  return reverse === original;
}

console.log(Pdrome(Pilandrome)); // true or false

//OR palindrome number
let Pilandrom = prompt("Enter the String");

function Pdrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(Pdrome(Pilandrom)); // true or false

//write raising a number to the power of another number
let base = prompt("Enter the number ");
let expon = prompt("Enter the number ");

function Power(base, expon) {
  let result = 1;
  for (let i = 1; i <= expon; i++) {
    result = result * base;
  }
  return result;
}
console.log(Power(base, expon));

// write  count vowel and consonant in a string

let str = prompt("Enter a string:");
let vowels = 0;
let consonants = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if ("aeiou".includes(ch)) {
    vowels++;
  } else if (ch >= "a" && ch <= "z") {
    consonants++;
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);

// write factor of a number using function

let N = prompt("Enter the number ");

function Fact(n) {
  let b = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      b.push(i);
    }
  }
  return b;
}
console.log(Fact(N));

//write  sum of Average of an array  of numbers
let avg = [2, 3, 3, 4, 8];

function Avg(arr) {
  let sum = 0;
  arr.forEach(function (v) {
    sum += v;
    average = sum / arr.length;
  });
  return average;
}

console.log(Avg(avg));

//second method to find average of an array
let avg1 = [2, 3, 3, 4, 8];

function Avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return { sum: sum, avg: avg };
}
console.log(Avg(avg1));

//write  Simple Interest
let p = 1000;
let r = 5;
let y = 1;

function Loan(p, r, y) {
  let simpleInterest = (p * r * y) / 100;
  return simpleInterest;
}
console.log(Loan(p, r, y));

// write prime number or not
function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
for (let i = 2; i < 1000; i++) {
  if (prime(i)) {
    console.log(i);
  }
}

//write  counts that number of  words in a Sentence
let sentence = "shailendra yadav is good";
function Word(sentence) {
  const word = sentence.split(" ");
  console.log(sentence);
  return word.length;
}
console.log(Word(sentence)); // Output: 4

//write  convert celsuis to fahrenheit

let celsuis = prompt("Enter the celsius ");
//celsuis=(Faharheit-32)*5/9
//Faharheit=celsuis*9/5+32
function Celsius(celsuis) {
  let faharheit = (celsuis * 9) / 5 + 32;
  faharheit = Math.round(faharheit);
  return faharheit;
}
console.log(Celsius(celsuis));

//write swapiing two numbers
let d = 5;
let b = 6;
let c = b;
b = d;
a = c;
console.log(`swaping a=${d} and b=${b}`);
//second method
// let a=5;
// let b=6;
// a=a+b
// b=a-b
// a=a-b
// console.log(`swaping a=${a} and b=${b}` )

//write armstrong number or not
let num = prompt("Enter a number to check for Armstrong");
function Arm(num) {
  num = Number(num); // Convert string to number
  let sum = 0;
  let temp = num; // Store original number

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
  }
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}
console.log(Arm(num));

//find FizzBuzz ,multiples of 3 and 5, fizz for 3 and buzz for 5

for (let i = 1; i <= 36; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

//write Pyramid pattern

let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let l = 1; l <= 2 * i - 1; l++) {
    row += l;
  }
  console.log(row);
}

//OR write Pyramid pattern
let ns = 10;
for (let i = 1; i <= ns; i++) {
  let row = "";
  for (let j = 1; j <= ns - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += k;
  }
  for (let l = i - 1; l >= 1; l--) {
    row += l;
  }
  console.log(row);
}

//write alphabetical order of  a string
let string = "acdefghs";
function Alph(string) {
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] > string[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(Alph(string));

//write Anagram or not

function areAnagrams(str1, str2) {
  str1 = str1.replace(/\s/g, "").toLowerCase(); //Remove spaces and convert to lowercase
  str2 = str2.replace(/\s/g, "").toLowerCase();
  if (str1.length !== str2.length) return false; // Check lengths first
  return str1.split("").sort().join("") === str2.split("").sort().join(""); // Sort and compare
}
console.log(areAnagrams("listen", "silent")); // true

//write trnspose of a matrix
// Input 2x3 matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

function transposeMatrix(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let transposed = [];

  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  return transposed;
}
// Call the function
console.log(transposeMatrix(matrix)); // Output: [[1, 4], [2, 5], [3, 6]]

// write code of perfect number or not
function Perfect(num) {
  let Prodivisor = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      Prodivisor.push(i);
    }
  }
  let sum = 0;
  Prodivisor.forEach((d) => {
    sum = sum + d;
  });
  console.log(sum);
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}
console.log(Perfect(6));

//write a program   that multiplies  two matrices and returns result

function matrice(arr0, arr2) {
  const row = arr0.length;
  const col = arr2[0].length;
  const secondArr = arr2.length;
  const result = [];

  for (let i = 0; i < row; i++) {
    result[i] = []; 
    for (let j = 0; j < col; j++) {
      let value = 0;
      for (let n = 0; n < secondArr; n++) {
        value += arr0[i][n] * arr2[n][j];
      }
      result[i][j] = value;
    }
  }
  return result;
}

// Example matrices
const arr0 = [
  [1, 2, 3],
  [4, 5, 6],
];

const arr2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

console.log( matrice(arr0, arr2));

    

