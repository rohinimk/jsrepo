let myDate = new Date();
/*
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString('en-IN'));
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);
*/

/*
let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
*/

/*
let myCreatedDate = new Date(2023,0,23,5,3);
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());
*/

let myCreatedDate = new Date("01-14-23");
let myTimeStamp = Date.now();
//console.log(myCreatedDate.getTime());
//console.log(myTimeStamp);
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long"
});





