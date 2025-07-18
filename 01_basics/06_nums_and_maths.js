/*
const score = 400;
console.log(score); //400

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
*/

/*
//Precision
let anotherNumber = 23.896;
console.log(anotherNumber.toPrecision(3));
anotherNumber = 123.896;
console.log(anotherNumber.toPrecision(3));
/*
.toPrecision() - Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
//
anotherNumber = 1123.896;
console.log(anotherNumber.toPrecision(3)); //1.12e+3
*/

/*
const hundresds = 1000000;
console.log(hundresds.toLocaleString());
console.log(hundresds.toLocaleString('en-IN'));
*/

//******MATHS******

/*
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
*/

/*
console.log(Math.random()); //values between 0 to 1
console.log(Math.random()*10); //values between 0 to 9.999999
console.log((Math.random()*10) + 1);//min value will be 1+
*/

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min);











