// ES6 mei aayi h


class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password
    }



    encryptPassword(){
        return `${this.password}abc`
    }
}


const chai = new User("rohan", "a@b.com", "123")
//yaha pe ek class User banaya jisme constructor hai jo name, email aur password leta hai aur ek method encryptPassword hai jo password ko encrypt karta hai.
// ye humne uss class ka ek object banaya jiska naam chai hai.
// ya hum isko class ka instance bhi bol sakte hain.

console.log(chai.encryptPassword());

// behind the scenes jab hum class ka object banate hain to javascript uske liye ek function banata hai jise constructor function bolte hain aur uske prototype me methods add karta hai.

function User(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

// abb dekho ye function but jacascript me ye ek object hai jiska prototype property hota hai jisme hum methods add kar sakte hain.
// ye hai under the hood working of classes in javascript.