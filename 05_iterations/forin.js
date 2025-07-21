//for objects - for in loop
//for arrays - for of / foreach loop
//for maps - for of loop

/*
for (const key in object) {
    /*
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

const myObject = {
    "game1" : "ABCS",
    "game2" : "PlayStat",
    "game3" : "Mac"
}

for (const key in myObject) {
    //console.log(key + " => " + myObject[key]);        
    /*
    if (Object.prototype.hasOwnProperty.call(myObject, key)) {
        const element = myObject[key];
        console.log(element);        
    }
    */
}

const programming = ["c++", "java", "node", "typescript"];
for (const key in programming) {
    //console.log(key + " => " + programming[key]);    
}

//for in loop won't work for non iterables
//map is not iterable
const map = new Map();
map.set("IN","India");
map.set("AU", "Australia");
map.set("FR","France");
map.set("IN","India");

for (const key in map) {
    //console.log(key);    
}