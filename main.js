class User {
    constructor(username, email, score){
        //set up properties of the object
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in.`);
        return this;
    }
    logout(){
        console.log(`${this.username} logged out.`);
        return this;
    }
    incrScore(){
        this.score ++;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User {
    constructor(username, email, title) {
        super(username, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.username !== user.username);
    }
}

const userOne = new User('Mario', 'mario@thenetninja.co.uk');
const userTwo = new User('Luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin ('Ryu', 'ryu@thenetninja.co.uk', 'black-belt');

// the 'new' keyword flow:
// 1. creates an empty object {}
// 2. binds the value of 'this' to the new empty object inside the class being used.
// 3. calls the constructor function to 'build' the object. 'this' keyword refers to that specific class object created. 


//chaining methods:
userOne.login().incrScore().incrScore().logout();
userTwo.login().incrScore().incrScore().logout();


let users = [userOne, userTwo, userThree];

userThree.deleteUser(userTwo);
console.log(users);
console.log(userThree);

