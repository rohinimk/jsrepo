/*
const programming = ["c++", "java", "node", "typescript"];

//foreach doesn't return any value/values
const values = programming.forEach( (item) => {
    console.log(item);   
    return item; 
} );

console.log(values);
*/

//foreach doesn't return any values
//filter returns values
const myNums = [1,2,3,4,5,6,7,8,9,10];
/*
//const values = myNums.filter( (num) => num > 4); //writing a filter 
const values = myNums.filter( (num) => {
    return num > 4;
}); //explicit return required when filter using arrow function
console.log(values);
*/

/*
//how to return values using foreach
const newNums = [];
myNums.forEach( (item) => {
    if(item > 4) newNums.push(item);
});
console.log(newNums);
*/


const books = [
    {title:"Book1",genre:"Fiction",publish:1984},
    {title:"Book2",genre:"Non-Fiction",publish:2000},
    {title:"Book3",genre:"History",publish:2022}
];

const userBooks = books.filter( (bk) => bk.publish >= 2000);
console.log(userBooks);





