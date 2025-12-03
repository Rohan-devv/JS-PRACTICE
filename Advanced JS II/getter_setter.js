class User{
    constructor(name, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set password(value){
        this._email = value
    }

    get password(){
        return `${this._password}ABC`
    }
    set password(value){
        this._password = value
    }
}
const rohan = new User("rohan@example.com", "123")
