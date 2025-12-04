let myName = "Rohan   "
 

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rohan = function (){
    console.log("rohan is present in all objeccts" )
}

Array.prototype.heyArray = function (){
    console.log("hey array is present in all arrays")
}

heroPower.rohan()// rohan is present in all objeccts
myHeros.rohan() // rohan is present in all objeccts
myHeros.heyArray() // hey array is present in all arrays
heroPower.heyArray() // hero power me heyArray method nahi milega kyuki wo array ka prototype nahi hai


// ++++++++++++++++++++++++++ Inheritance in javascript ++++++++++++++++++++++++++++++++

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User
// Teacher me ab User ke sare properties aur methods aa jayenge

// Modern syntax 

Object.setPrototypeOf(Teacher, User)

let userName = "Rohan    "

String.prototype.trueLength = function (){
    console.log(this)// ye this us string ko refer kar raha hai jiske upar ye method call hua hai
    console.log(`True length is :${this.trim().length}`)
}
userName.trueLength() // True length is :5
"Amitpal   ".trueLength() // True length is :7
"   Hello World    ".trueLength() // True length is :13