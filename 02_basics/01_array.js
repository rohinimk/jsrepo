//array

//1. JS arrays are resizable and can contain different dataTypes.
//2. JS arrays when copied makes a shallow copy i.e. copied and new array will have the same reference / memory address
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj", "dodo"];
const myArr2 = new Array(1, 2, 3, 4);

//Array Methods

//myArr.push(6);
//console.log(myArr);
//myArr.pop();
//console.log(myArr);

//myArr.unshift(9);
//console.log(myArr);
//myArr.shift();
//console.log(myArr);

/*
const newArr = myArr.join(); //convertes Array into String type
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);
*/

console.log("A ", myArr);
const myN1 = myArr.slice(1, 3);
console.log("slice : ", myN1);
console.log("B ", myArr);
const myN2 = myArr.splice(1, 3);
console.log("splice: ", myN2);
console.log("C ", myArr);

//Differenct between slice and splice
//1. slice - range is not included and splice - range is included
//2. slice - doesn't change the original array and splice - chnages the orriginal array. Removes the spliced elements.





