class User{
    constructor(name){
        this.name = name
    }


    logMe(){
        console.log(`User name is ${this.name}`);
    }
}

class student extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new couse added by ${this.username}`)
    }
}

const chai =  new student("rohan", "rohan@example.com", "password123")
console.log(chai.addCourse())

const masalaChai = new User("masalaChai")
masalaChai.logMe()


console.log(chai === masalaChai)

console.log(chai instanceof student)// true

console.log(chai instanceof User) // true hi hoga kyki student class User class ko extend kar rahi hai 

// false kyuki dono alag alag objects hain
 // why new keyword is used here?
 // new keyword ka use karke hum ek naya object create karte hain jo us class ka instance hota hai.