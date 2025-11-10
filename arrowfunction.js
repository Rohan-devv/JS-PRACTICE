const user = {
    username:"rohan",
    price: 100,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to websitee `)
        //console.log(this) // ye user object ko point karega
    }
}

user.username = "Rohan Pal"
user.welcomeMessage()

//console.log(this) // ye global object ko point karega

// browser me ye window object ko point karega

function chai(){
    let username = "rohan"
    console.log(this.username) // undefined because function ke andar this global object ko point karega lekin global object me username defined nahi hai 
}
//chai()

const arrowChai = () => {
    let username = "rohan"
    console.log(this.username)// ye bhi undefined dega because arrow function me bhi this global object ko point karega lekin global object me username defined nahi hai
}
//arrowChai()

//+++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++

const addtwo = (num1, num2) => {
    return num1 + num2
}
//console.log(addtwo(3,4));


const anotherWay = (num1, num2) => num1 + num2
const anotherWayy = (num1, num2) => (num1 + num2)// react me bhot baar aise likhna padta hai

// curly brace me return likhna jaruri hai agar function body me multiple line ho to



const forObjects = (num1, num2) => ({username:"dfgh"})// object return karna ho to aise karna padta hai