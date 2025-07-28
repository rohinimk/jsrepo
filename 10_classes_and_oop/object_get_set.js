const User = {
    _email: "test@test.com",
    _password: "123",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const userOne = Object.create(User);
console.log(userOne.email);
