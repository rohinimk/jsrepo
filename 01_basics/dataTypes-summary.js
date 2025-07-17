//JavaScript is a dynamically typed language.

//Primitive datatTypes - copied by value

//7 types - String, Number, Boolean, null, undefined, Symobl, BigInt

/*
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);
console.log(id);
console.log(anotherId);

//Symbol provides unique values. In the above example even if the values passed are similar i.e. '123' the id and anotherId will have different values
*/

//Non-primitive/reference dataTypes - copied by reference

//Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"]
let myObj = {
        name: "rohini",
        age: 22
};

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); //function type but it is called as object function
console.log(typeof(myObj));
console.log(typeof null); //typeof null is object
console.log(typeof undefinedll); //typeof null is undefined









