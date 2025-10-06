/*

map->The map() method in JavaScript is used on arrays.
It creates a new array by applying a given function to each element of the original array.
💡 Important:
Does not modify the original array.
Always returns a new array.

Syntax:
array.map(function(element, index, array) {
   // return transformed value
});


 */

const map = new Map();

const obj = {};
map.set("name", "John");
map.set(22, "age");
map.set(true, "isAdmin");
console.log(map.delete("dfdfs"))
console.log(map.has("name"));
console.log(map.get(22));
console.log(map.size);
map.set("name","shailendra");
console.log(map,obj);



// Iterate over map

map.forEach((value, key) => {
  console.log(key, value);
});

// map.clear();

for(let value of map.values()){
    console.log(value);
}

for(let key of map.keys()){
    console.log(key);
}

for(let [key,value] of map.entries()){
    console.log(key,value);
}


// Performance of Object and map

const obj1 = {};
const arr = [1000000].fill(0).map(()=>Math.random()*100000000);
console.time("obj");
for(let i=0;i<arr.length;i++){
    obj1[arr[i]]=true;
}
console.timeEnd("obj");

//WeakMap in js


const weakmap = new WeakMap();
let obj2 = {"name":"shailendra"};
weakmap.set(obj2,"hello");
console.log(weakmap);


// set in js

const set = new Set([1,2,3,4,5,2]);
set.add(6);
set.add(7);
set.delete(3);
console.log(set.has(4));
console.log(set.size);
//set.clear();
console.log(set);
for(let x of set.keys()){
    console.log(x);
}
for(let x of set.values()){
    console.log(x);
}
for(let [key,value] of set.entries()){
    console.log(key,value);
}
set.forEach((value)=>console.log(value));

console.log(set.size);



//Question 1: Union of two arrays
function union (arr1, arr2) {
    const set = new Set(arr1);
    for (let ele of arr2) {
        set.add(ele);
    }
    return Array.from(set);
}
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(union(array1, array2)); // [1, 2, 3, 4, 5, 6]



let ar1=[1,2,3,4];
let ar2=[3,4,5,6];
console.log(...new Set([...ar1,...ar2]));

//Question 2: Intersection of two arrays
function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = [];
    for (let ele of arr2) {
        if (set1.has(ele)) {
            result.push(ele);
        }
    }
    return result;
}
const array3 = [1, 2, 3, 4];
const array4 = [3, 4, 5, 6];
console.log(intersection(array3, array4)); // [3, 4]

let ar5 = [1, 2, 3, 4];
let ar6 = [3, 4, 5, 6];
let Intersection = ar5.filter((value) => ar6.includes(value));
console.log(Intersection);