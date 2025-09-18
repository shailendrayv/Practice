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
// arr1 = [1,2,3,4,5,6,7,8,9];
// arr1.splice(1,3,10,20,30); // removes 3 elements from index 2
// console.log(arr1);

// Shallow copy of array
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2.splice(1,4);
console.log(arr2);

let arr4 = [1, 2, 3];
let copy = [...arr4];
console.log(copy);