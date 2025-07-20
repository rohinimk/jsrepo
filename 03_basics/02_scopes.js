/*
let a = 300;

if(true){
    let a = 10;
    const b = 30;
    console.log("INNER a: ", a);
}

console.log("a: ", a);

//scope when using "node" is different than scope in the browser console
*/

function one(){
    const userName = "James";

    function two(){
        const website = "mywebsite";
        console.log(`my username is : ${userName}`);        
    }
    //console.log(`my website is : ${website}`);
    two();
}

//one();

// +++++++++++++++ interesting ++++++++++++

//function
console.log(addOne(5));
function addOne(value){
    return value + 1;
}
addOne(5);


//addTwo(5); - //errors
//function / expression
const addTwo = function(value){
    return value + 2;
}
//addTwo(5);