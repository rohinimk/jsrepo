const myNums = [1,2,3,4];

/*
//using function
const myTotal = myNums.reduce( function (prevValue, currentValue)  {
    console.log(`prevValue is : ${prevValue} and currentValue is : ${currentValue}`);    
    return prevValue + currentValue;
},3);
*/

/*
//using arrow function
const myTotal = myNums.reduce( (prevValue, currentValue) => (prevValue + currentValue), 3);
console.log(myTotal);
*/

const shoppingCart = [
    {
        item : "item1",
        price: 299
    },
    {
        item : "item2",
        price: 500
    },
    {
        item : "item3",
        price: 2999
    }
];

const totalValue = shoppingCart.reduce( (acc,item) => (acc + item.price), 0);
console.log(totalValue);
