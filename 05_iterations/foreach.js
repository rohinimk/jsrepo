const programming = ["c++", "java", "node", "typescript"];
for (const key in programming) {
    //console.log(key + " => " + programming[key]);    
}

/*
//callback function doesn't have a name
programming.forEach( function (item){ 
    console.log(item);
    
} );
 */

//arrow function as a callback function
programming.forEach( (val) => {
    //console.log(val);    
} );

/*
function printMe(item){
    console.log(item);    
}
programming.forEach( printMe ); //give a reference to a function
*/

/*
programming.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} );
 */

const myLanguage = [
    {
        language : "javascript",
        shortcut : "js"
    },
    {
        language : "typescript",
        shortcut : "ts"
    },
    {
        language : "asp.net",
        shortcut : ".net"
    }
];

myLanguage.forEach( (item) => {
    console.log(`language is ${item.language} and shortcut is ${item.shortcut}`);    
} );