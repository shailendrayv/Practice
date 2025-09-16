/*
 Q2:Sum of digits in a number
 12344=1+2+3+4+4=14
*/


const prompt = require("prompt-sync")();
let num=prompt("Enter a number:");
function Sum(num){
    let sum=0;
    while(num>0){
        let rem=num%10;
        sum=sum+rem;
        num=Math.floor(num/10);
    }
    return sum;
}
console.log(Sum(num));


/*
Q.3: Count the number of digits in a number
12344=5
*/

let nums=prompt("Enter a number:");
function Count(nums){
    let count=0;
    while(nums>0){
        count++;
        nums=Math.floor(nums/10);
    }
    return count;
}
console.log(Count(nums));