class User {
    constructor(username, email){
        //set up properties of the object
        this.username = username;
        this.email = email;
    }
    login(){
        console.log(`${this.username} just logged in.`);
    }
    logout(){
        console.log(`${this.username} logged out.`);
    }
}

const userOne = new User('Mario', 'mario@thenetninja.co.uk');
const userTwo = new User('Luigi', 'luigi@thenetninja.co.uk');
// the 'new' keyword flow:
// 1. creates an empty object {}
// 2. binds the value of 'this' to the new empty object inside the class being used.
// 3. calls the constructor function to 'build' the object. 'this' keyword refers to that specific class object created. 

userOne.login();
userOne.logout();
userTwo.login();
userTwo.logout();