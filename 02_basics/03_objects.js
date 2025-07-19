//objetcs can be defined as object literals or through constructors
//object literals - don't create singleton
//constructors - create singleton - Object.create


//object literal

const mySym = Symbol("mykey1");

const JsUser = {
    name : "rohini", //budefault system process it as "name"
    "full name" : "rohini karadkhele",
    [mySym] : "myKey1",
    age : 21,
    location : "Melbourne",
    email : "rohini@microsoft.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);
//console.log(typeof JsUser[mySym]);
//console.log(typeof mySym);

//JsUser.email = "rohini@google.com";
//console.log(JsUser.email);
//Object.freeze(JsUser);
//JsUser.email = "rohini@microsoft.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



