class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName is : ${this.username}`);        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username); // similar to 'call' method
        this.email  = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);        
    }
}

const teacher = new Teacher('John', 'test@test.com', "123");
teacher.addCourse();

const userOne = new User('Mojo');
//userOne.addCourse();
userOne.logMe();

console.log(teacher === userOne); //false
console.log(userOne === teacher); //false
console.log(teacher instanceof User); //true
