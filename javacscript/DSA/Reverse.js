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