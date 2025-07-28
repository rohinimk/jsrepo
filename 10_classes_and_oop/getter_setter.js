class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email;
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password.toUpperCase();
        /* return `${this._password}encrypted`; //we set the value as provided but on getter we add some extra things so that user will not get an original passwrod ever */
    }

    set password(value){
        this._password = value;
    }
}

const userOne = new User("Sassy@test.com", "123");
console.log(userOne.password);
userOne.email = "test@test.com";
console.log(userOne.email);
