function setUserName(username){
    //complex DB Calls
    this.username = username;
    console.log("Called");    
}

function createUser(username, email, password){
    //setUserName(username); //this actually refers the function. doesn't call the function
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
}

const userOne = new createUser("Honey", "test@test.com", "1234");

console.log(userOne);
