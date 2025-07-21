/*
//for of - array specific loop
// ["", "", ""] //array of strings
// [{}, {}, {}] //array of objects
for (const element of object) {    
}
*/

const arr = [1,2,3,4,5]
for (let val of arr) {
    //console.log(val);    
}

//Maps
const map = new Map();
map.set("IN","India");
map.set("AU", "Australia");
map.set("FR","France");
map.set("IN","India"); //map holds unique values and the order of adding keys is preserved
//console.log(map);

for (const keys of map) {
    console.log(keys);    
}

//destructuring of arrays
for (const [key1, value1] of map) {
    console.log(key1 + ":" + value1);    
}


const myObject = {
    "game1" : "ABCS",
    "game2" : "PlayStat",
    "game3" : "Mac"
}

/*
///won't work for objects
for (const [key, value] of myObject) {
    console.log(key + " => " + value);    
}
*/

//for of loop doesn't work for objects
//we need to use for in for objects
