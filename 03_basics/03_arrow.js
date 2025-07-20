const user = {
    username : "james",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);        
        console.log(this);        
    }
}

//user.welcomeMessage();
//user.username = "Sames";
//user.welcomeMessage();

//console.log(this); //returns an empty object - because we are running in the node environment. When run in an windows environemnt / browser console, it will be windows object.

/*
function one(){
    console.log(this);
}
one();
*/

/*
function one(){
    let name = "avi";
    console.log(this.name); //cannot access this in the function. We can access in the object function but not a separate function
}
one();
*/

/*
const one = function(){
    let name = "avi";
    console.log(this.name);
}
one();
*/

/*
//arrow function
const one = () => {
    let name = "avi";
    //console.log(this.name); //undefined
    console.log(this); //empty object
}
one();
*/

/*
//arrowFunction
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));
*/


//arrowFunction implicit return
//implicitly returned it as 
//const addTwo = (num1, num2) => return num1 + num2;
//const addTwo = (num1, num2) => num1 + num2;
//another way to write it is
//const addTwo = (num1, num2) => (num1 + num2);
//if you write in curly braces you got to use return keyword. But, if you wrap it in parantheses no need to write return keyword
//console.log(addTwo(10,4));

//returning an object using implicit arrow function
const addTwo = (num1, num2) => ({name : "james", price : 200});
console.log(addTwo(2,5));





