function multiplyBy5(num){
    return num * 5;
}
multiplyBy5.power = 2;

console.log(multiplyBy5(10)); // Output: 50
console.log(multiplyBy5.power) // Output: 2
console.log(multiplyBy5.prototype) // Output: {} yaha pe prototype us function ka prototype hai jo ek empty object hai

// iska matlab functions are objects in javascript



function User(username, score){
    this.username = username;
    this.score = score;
}

User.prototype.increment = function(){
       this.score++ // jisne bhi bulaya uska score increment kar do
}
User.prototype.printMe = function (){
    console.log(`Username: ${this.username}, Score: ${this.score}`)
}

// new keyword ko abb pata hai ki User ek constructor function hai or uske prototype me increment or printMe methods ko add kar dega

const tea = new User('tea', 5)
const chai = new User('chai', 10)

tea.increment() // jisne bhi bulaya uska score increment kar do
tea.printMe() // Username: tea, Score: 6

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/