/*
object-In JavaScript, an object is a collection of key-value pairs.
.Keys (also called properties) are strings (or symbols).
.Values can be anything: string, number, boolean, array, function, or even another object.

*/


const person ={
    name: "John",
    age: 30,
    isStudent: false,
    skills: ["JavaScript", "React", "Node.js"],
    project:{
        "Frontend": "developer",
    },
    code: function(){
        return "start coding"
    },
    walk: ()=> {"start coding arrow function";
    }

}


console.log(person["age"]);
console.log(person.name);
console.log(person.code());

// Check if a property exists in an object
console.log(person.hasOwnProperty("name")); // true

// How to add, update, and delete properties in an object
person.name = "Vivek"; // Add
console.log(person.name);
person.city = "New York"; // Update
console.log(person.city);
delete person.project; // Delete
console.log(person.project); // undefined
person.age = 31;



const person2 = person
console.log(person);



Object.seal(person);
person.name = "shailendra"; // Update is allowed
person.country = "USA"; // Add is not allowed
delete person.skills; // Delete is not allowed
console.log(person);



// object method

const person3 =  Object.assign({}, person);
person3.skills = null;
console.log(person3)
console.log(Object.keys(person3));
console.log(Object.values(person3));
console.log(Object.entries(person3));


// for...in loop
for (let key in person){
    console.log(key, person[key]);
}

// for...of loop with Object.keys()
for (let key of Object.keys(person)){
    console.log(key, person[key]);
}

//Object.keys(person).forEach((key) =>onsole.log(key));

console.log(Object.is(person, person2));






