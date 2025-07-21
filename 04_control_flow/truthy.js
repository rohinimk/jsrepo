/*
let userEmail = "scott@ai.com";
userEmail = ""; //empty string is considered as false
//userEmail = []; //empty array is considered as true

if(userEmail){
    console.log("Got user email");;
}else {
    console.log("Don't have user email");    
}

/*
//falsy values
//false, empty string, 0, -0, BigInt 0n, null, undefined, NaN

//all values other than above falsy values are truthy values
//true, empty array[], empty object{}, "0", 'false', " ", empty function function(){}
*/

/*
userEmail = [];
if(userEmail.length === 0){
    console.log("Array is empty");    
}

const emptyObject = {};
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");    
}
    */


//nullish coalscing operator (??) null undefined
let val1;
//val1 = 5 ?? 10; //5
//val1 = null ?? 10; //10
//val1 = undefined ?? 15; //15
val1 = null ?? 10 ?? 20
console.log(val1);

//terniary operator - condition ? true : false
const price = 100;
price >= 80 ? console.log("greater than 80") : console.log("less then 80");
;




