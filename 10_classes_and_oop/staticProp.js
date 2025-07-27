class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User Name is : ${this.username}`);        
    }

    static createID(){
        return "123";
    }
}

const userOne = new User('Honey');
//console.log(userOne.createID());

class Teacher extends User{
    constructor(email, username){
        super(username);
        this.email = email;
    }
}

const teacher = new Teacher('345Q2@test.com','Mike');
teacher.logMe();
//console.log(teacher.createID());

