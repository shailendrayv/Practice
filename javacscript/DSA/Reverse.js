// Reverse  Strings in JavaScript
function reverse(str) {
    return String(str).split('').reverse().join('');
}
console.log(reverse("Shailendra"));  // Output: "ardneliahS"
console.log(reverse(12334445));      // Output: "54443321"


// factorial of a number
let a=prompt("Enter fact ");
function cal(a){
      if(a<0){
            throw new Error("not less than Zero");
        }
    let fact=1;
    for(let i=1;i<=a;i++){
      
        fact=fact*i;
    }
    return fact;
}
console.log(cal(a));

// Is leap year or not

let leap =prompt("Enter the year ");
function year(){
    if(leap%4 === 0){
        return "Leap Year";
    }else{
        return "Not Lear Year";
    }
}
console.log(year(leap));


// write function  that calculate  the sum of  digits of a number

let No = 7875;
function sum(n) {
    let sum = 0;
    n.toString().split('').forEach(function(v) {
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

let arr1 =[1,2,34,5,6,7,8]
function MaxArr(arr) {
    const maxNo=Math.max(...arr);
    return maxNo;
   
}
console.log(MaxArr(arr1));

//write pilandrome number

 let Pilandrome = prompt("Enter the Number");

function Pdrome(str) {
    num = Number(str);  // Convert input to a number
    let original = num;
    let reverse = 0;

    while (num > 0) {
        let reminder = num % 10;
        num = Math.floor(num / 10);
        reverse = reverse * 10 + reminder;
    }

    return reverse === original;
}

console.log(Pdrome(Pilandrome));  // true or false


//OR palindrome number
let Pilandrom = prompt("Enter the String");

function Pdrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(Pdrome(Pilandrom));  // true or false

//write raising a number to the power of another number
let base=prompt("Enter the number ");
let expon=prompt("Enter the number ");

function Power(base,expon){
    let result=1;
    for(let i=1;i<=expon;i++){
     result=result*base;
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
    if ('aeiou'.includes(ch)) {
        vowels++;
    } else if (ch >= 'a' && ch <= 'z') {
        consonants++;
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);


// write factor of a number using function

let N=prompt("Enter the number ");

function Fact(n){
    let b=[];
    for(let i=1;i<=n;i++){
        if(n%i===0){
            b.push(i)
        }
    }
    return b;
}
console.log(Fact(N));


//write  sum of Average of an array  of numbers
let avg = [2, 3, 3, 4,8];

function Avg(arr) {
    let sum = 0;
    arr.forEach(function(v) {
        sum += v;
        average=sum/arr.length
    });
    return average;
        
}

console.log(Avg(avg));


//second method to find average of an array
let avg1 = [2, 3, 3, 4,8];

function Avg(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum  +=arr[i] 
    }
    let avg=sum/arr.length
    return { sum:sum,avg:avg};
    
        
}
console.log(Avg(avg1));

//write  Simple Interest
let p =1000 ;
let r=5;
let y=1;

function Loan(p,r,y) {
    let simpleInterest =p*r*y/100;
    return simpleInterest;
    
}
console.log(Loan(p, r, y));

// write prime number or not
function prime(num){
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
    for(let i=2;i<1000;i++){
        if(prime(i)){
            console.log(i)
        }
    }


//write  counts that number of  words in a Sentence
let sentence = "shailendra yadav is good";
function Word(sentence){
    const word=sentence.split(' ');
    console.log(sentence)
    return word.length;
}
console.log(Word(sentence));  // Output: 4

//write  convert celsuis to fahrenheit

let celsuis =prompt("Enter the celsius ");             
//celsuis=(Faharheit-32)*5/9
//Faharheit=celsuis*9/5+32
function Celsius(celsuis){
    let faharheit= (celsuis*9/5)+32
    faharheit=Math.round(faharheit)
    return faharheit 
}
console.log(Celsius(celsuis)); 

//write swapiing two numbers
let d=5;
let b=6;
let c=b
b=d
a=c
console.log(`swaping a=${d} and b=${b}`)
//second method
// let a=5;
// let b=6;
// a=a+b
// b=a-b
// a=a-b
// console.log(`swaping a=${a} and b=${b}` )


//write armstrong number or not
let num = prompt("Enter a number to check for Armstrong");
function Arm(num){
    num = Number(num);     // Convert string to number
    let sum = 0;
    let temp = num;        // Store original number

    while(temp > 0){
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }
    if(sum === num){
        return true;
    } else {
        return false;
    }
}
console.log(Arm(num));