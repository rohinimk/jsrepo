//object singleton

//const tinderUser = new Object(); //singleton
const tinderUser = {}; //no singleton

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "rohini",
            lastname : "ka"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

//const obj3 = {obj1, obj2}
//console.log(obj3);

//obj1 - target and obj2 - source
//const obj3 = Object.assign(obj1, obj2);

//below line is a better way as an empty object can be target and other objects will be source
//const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3);

const obj3 = {...obj1, ...obj2};
//console.log(obj3);

//when values come from the database
const users = [
    {
        id:1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email: "b@gmail.com"
    }
]
//console.log(users[1].email);

/*
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //return type is an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //every key value is returned as an array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
*/












