// static properties and methods in classes

class User{
    constructor(name){
        this.name = name
    }


    logMe(){
        console.log(`User name is ${this.name}`);
    }

    static createId(){
        return '123'
    }
      
}
const chai =  new User("rohan")
chai.createId() //ye error dega kyuki createId static method hai aur hum usko instance ke through call kar rahe hain. 
// static ka matlb layman terms me ye hota hai ki ye method class ke sath directly associated hota hai na ki uske instances ke sath.
// kisi ko bhi access nhi krne deta