const user = {
    username : "Maria",
    loginCount : 8,
    signin : true,

    getUserDetails : function(){
        //console.log('Got user details from database');
        //console.log(`User Name is: ${this.username}`);        
        console.log(this);        
    }
};

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this); //global object of node. {}. In node it will be an empty object. In browser it will a windows object.

function User(username, loginCount, isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    //return this; //implicit
}

const userOne = new User("Maria",7,true);
const userTwo = new User("Jane",11,false);

//console.log(userOne);
//console.log(userTwo);
console.log(userOne.constructor);
console.log(userOne instanceof User);




