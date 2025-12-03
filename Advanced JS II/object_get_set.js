const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

//getter bss memory se laake ek override kar deta hai
// jo hume chahiye wo return kar deta hai


// or jo email set karte hai wo setter ke through hota hai
// jab hum tea,email kar rahe hai setter use ek propert ki tarah hi dekh raha hai 


// jaise hum array ki length .length se dekh lete hai uske under the hood yahi getter setter use hota hai