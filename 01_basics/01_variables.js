const accountId = 144553;
let accountEmail = "rohini@gmail.com";
var accountPassword = "12345";
accountCity = "Melbourne";

//accountId = 2; //not allowed
accountEmail = "rmk@gmail.com";
accountPassword = "abcde";
accountCity = "BNB";
let accountState;

/*
1.preferred not to use "var" because of issue in block scope and functional scope
2. Hoisting
3.Creating global scope
4. Re-declaration
https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var

*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
