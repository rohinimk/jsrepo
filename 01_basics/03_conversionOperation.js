//let score = 33;
let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

score = "33abc";
console.log(typeof score);
console.log(Number(score)); //NAN
console.table([typeof(Number(score)), Number(score)]); //NAN


score = null;
console.table([score,typeof(Number(score)), Number(score)]);

score = undefined;
console.table([score,typeof(Number(score)), Number(score)]);

score = true;
console.table([score,typeof(Number(score)), Number(score)]);

score = "abc";
console.table([score,typeof(Number(score)), Number(score)]);

//Number dataType Notes
//33  => 33
//"33abc"  => NaN, type will be a number
//true => 1, false => 0
//null => 0, type will be a Number
//undefined => NaN will be a Number

let valBoolean = 1;
console.table([valBoolean, Boolean(valBoolean)]); 
valBoolean = 0;
console.table([valBoolean, Boolean(valBoolean)]); 
valBoolean = "";
console.table([valBoolean, Boolean(valBoolean)]); 
valBoolean = "rohini";
console.table([valBoolean, Boolean(valBoolean)]); 
valBoolean = 123;
console.table([valBoolean, Boolean(valBoolean)]); 
valBoolean = null;
console.table([valBoolean, Boolean(valBoolean)]); 
valBoolean = undefined;
console.table([valBoolean, Boolean(valBoolean)]); 

//boolean dataType Notes
//1 => true, 0 => false, 1234 => true
//"" => false
//"rohini" => true
//null => false
//undefined => false



