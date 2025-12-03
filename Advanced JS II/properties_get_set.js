function User (name, password){
    this.email = email
    this.password = password

    Object.defineProperty(this, 'name', {

        get: function(){
            return this._name.toUpperCase()

        },
        set: function(value){
            this._name = value
        }

    })


    Object.defineProperty(this, 'password', {

        get: function(){
            return this._password.toUpperCase()

        },
        set: function(value){
            this._password = value
        }

    })
}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);