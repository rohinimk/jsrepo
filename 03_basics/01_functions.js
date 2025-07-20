/*
//paramters - variables used in function definition
function addTwoNumbers(number1, number2)
{
    console.log(number1 + number2);
}

//arguments - variables used while calling functions
//addTwoNumbers(); //NaN
//addTwoNumbers(3,4);
//addTwoNumbers(3, "4")
//addTwoNumbers(3, "a")
//addTwoNumbers(3, null); //3

const result = addTwoNumbers(3,5)
console.log(result); //undefined
*/

function addTwoNumbers(num1, num2)
{
    let result = num1 + num2;
    return result;
}

const result = addTwoNumbers(3, 5);
//console.log("Result: " + result);

function loginUserMessage(userName = "Sam"){
    //if(userName === undefined){
    if(!userName){
        console.log("Please enter a user Name");
        return;             
    }
    return `${userName} just logged in`;
}

//console.log(loginUserMessage('James'));
//console.log(loginUserMessage(''));
//console.log(loginUserMessage());

/*
//...num1 - REST operator.
//Rest operator and spread operator are same. Which one is which depends on it's usage
function calculateCartPrice(...num1)
{
    return num1;
}

console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200, 400, 500));
*/

function calculateCartPrice(val1,val2, ...num1)
{
    return num1;
}

//console.log(calculateCartPrice(200, 400, 500, 300));
//console.log(calculateCartPrice(500, 300));

const user = {
    userName : "James",
    price : "2356"
}

function handleObject(anyObject){
    console.log(`username is : ${anyObject.userName} and price is : ${anyObject.price}`);
}

function handleObject2(anyObject){
    console.log(`username is : ${anyObject.userName} and price is : ${anyObject.prices}`);
}

handleObject(user);
handleObject2(user);
handleObject({
    userName : "Sam",
    price: 999
});

const myNewArray = [100, 500, 200, 600];

function arrayValue(getArray){
    return getArray[1];
}

console.log(arrayValue(myNewArray));
console.log(arrayValue([1, 4, 10, 300]));


