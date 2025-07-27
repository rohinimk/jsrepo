/* let myName = 'Jimmy     ';
let myAddress = '2 Street     ';
console.log(myName.trueLength); */

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.print = function(){
    console.log('Method is present in all objects');
}

/* heroPower.print();
myHeroes.print(); */

//inheritance

const User = {
    name : "username",
    email : "test@test.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fulltime: true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User;

//modern Syntax
Object.setPrototypeOf(Teacher, TeachingSupport);

let anotherUserName = "Hello There     ";

String.prototype.trueLength = function(){
    console.log(this);    
    console.log(`True Length is: ${this.trim().length}`);      
}

anotherUserName.trueLength();