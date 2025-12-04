function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    // .call refernce ko hold krke rakhta hai call stack mein
    // ab jo hold krkr hi thodi na rakhna hai uski vaues bhi leni hai uske liye atta hai this syntax dekh skte ho
    // ek baat or ki this naya wla object ko refer kar raha hai jo createUser ke andar ban raha hai 
    // call me SetUsername function ko call kar raha hu jisme this ko current object pe point kar raha hu
    // jisse ki wo current object me username property set kar de
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);