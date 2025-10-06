//Object

const person = {
    name: "Shailendra",
    age: 30,
    city: "Indore",
    skills: ["JavaScript", "React", "Node.js"],
    project: "Web Development",
    signedIn: true,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet();
console.log(person);
console.log(person.age);

// constructor function
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.isAdmin = true;
    //return this;
    
}

const user = new User("shailendra", "abb@gmail.com", "123456")
const user2 = new User("s", "abb@gmail.com", "123456");
console.log(user,user2);


// Encapsulation
class vehicle {

    #regnumber;  // private property

   constructor(name,color, wheels,number){
     this.name = name;
     this.color = color;
     this.wheels = wheels;
     this.#regnumber = number;
   };
   getDetails(){
    return `The vehicle name is ${this.name}, color is ${this.color}, it has ${this.wheels}  and registration number is ${this.#regnumber}`;
   }
};

const ver1 = new vehicle("BMW","Black",4,"MP09AB1234");

console.log(ver1);
//console.log(ver1.#regnumber);

