//ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return (`${this.password}abc`);
    }

    changeUsername(){
        return (`${this.username.toUpperCase()}`)
    }
}

const userOne = new User("Honey", "test@test.com", "pwd");
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

/* // behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return (`${this.password}abc`);
}

User.prototype.changeUsername = function(){
    return (`${this.username.toUpperCase()}`)
}

const userTwo = new User("Honey2", "test2@test.com", "pwd2");
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername()); */