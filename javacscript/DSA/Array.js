// let mark = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let val of mark) {
//     sum += val;
    
// }
// let avg = sum / mark.length;
// console.log(`${avg}`)



//Q2nd 
//let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) { 

//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items)
    

//Q3rd

// companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// companies.splice(1, 1, "Ola");
// companies.push("Amazon");
// console.log(companies);


//Q4th
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1]; // Store the last element
// for (let i = arr.length-1; i > 0; i--) {
    
//         arr[i] = arr[i-1];
// }
//     arr[0] = copy; // Move the first element to the end

// console.log(arr); // 

/*
 
Array-collection of group of similar data types
 
 */


let arr=[1,2,3,4, "Hello" ,{name:"syed"} ,  true, [1,2,3]];
//let arr2 = new Array();
// console.log(arr);

console.log(arr[1],arr.length,arr.length-1);
arr.pop(); // removes last element
console.log(arr);
arr.push("world");
console.log(arr);

arr.shift(); // removes first element
console.log(arr);

arr.unshift("first");
console.log(arr);


// How do you through an array in js

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
arr.forEach((x,i)=>{
    console.log(x);
})

for(let x of arr){
    console.log(x);
}

/*use of Spilec() method
syntax: array.splice(start, deleteCount, item1, item2, ...)
*/
 arr1 = [1,2,3,4,5,6,7,8,9];
arr1.splice(1,3,10,20,30); // removes 3 elements from index 2
console.log(arr1);

// Shallow copy of array
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2.splice(1,4);
console.log(arr2);

let arr4 = [1, 2, 3];
let copy = [...arr4];
console.log(copy);


// Deep copy of array
let arr5 = [1, 2, 0 ,3];
let copy2 = arr5.slice();
console.log(copy2);


//Question 1: write  a  js program to Ascending order and Descending order of an array
let arr6 = [5, 3, 8, 1, 2];
arr6.sort()
arr6.reverse();
console.log(arr6);
arr6.sort((a,b)=>b-a);
console.log(arr6);

// Map , fileter, reduce
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


// Qustion : write a js program to how do you check  if  an element exists in an array or not
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


// Qustion : write a js program to how do you check   Index if  an element exists in an array or not
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

//flat
let arr12 = [1, 2, [3, 4,5, [5, 6]], 7, 8];
let flatArr = arr12.flat(2);
console.log(flatArr);
