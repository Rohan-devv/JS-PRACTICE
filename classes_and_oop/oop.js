const User = {

    username: 'defaultUser',
    password: 'defaultPass',
    getInfo: function info(){
        console.log(`Username: ${this.username}, Password: ${this.password}`);
    }

}
User.getInfo()// ye ek object literal hai jisme humne username aur password properties banayi hain aur ek method getInfo banaya hai jo username aur password return karta hai.

// ab agr hume dusra object bnana hai to fir se itna bada likhna padega yaha scene me aate hai constructor functions

// const promise = new Promise()
//const date = new Date()

// Ye new keyword constructor function ko call karta hai aur ek naya object banata hai jiska prototype us constructor function ke prototype ko point karta hai.



function UserConstructor(username, password){
    this.username = username
    this.password = password  // ye this keyword ek  naya object ko refer kar raha hai jo ban raha hai
    this.greeting = function(){
        console.log(`Hello, ${this.username}`);
    }
}

const userOne =  new UserConstructor('chai', 'chai123')
const userTwo =  new UserConstructor('tea', 'tea123')

// agar hum new nahi lagayenge to value overwrite ho jayegi global object pe jo ki browser me window hota hai aur node me global hota hai
// isliye hamesha constructor function ko new ke sath hi call karna chahiye or har object ki ek nayi copy banegi


// +++++++++++++++++++++++++  new keyword kya karta hai ? ++++++++++++++++++++++++++++++++

// new ek empty object banata hai jisme hum properties add kar sakte hain aur fir us object ko return kar deta hai
// constructor funcn call krta hai or sare arguments hai uske andr passon ho jaynge 
// jo humara this create hua uske andar add ho jaynge


//+++++++++++++++++++++++++++++ what is constructor +++++++++++++++++++++++++++++++++++

// constructor ek special function hota hai jo object banane ke liye use hota hai
// iska naam capital letter se start hota hai taaki hum easily pehchan sake ki ye ek constructor function hai
// constructor function ke andar hum this keyword ka use karke properties aur methods define kar sakte hain jo har object ke liye unique hoti hain

// contructor property refrence hoti hai khud hi ke baare me 


//++++++++++++++++++++++++++++++++++++ classes in javascript ?++++++++++++++++++++++++++++++++



// direct ans : Now we dont have classes in javascript, javascript is prototype based language not class based language
// classes ek syntactical sugar hai jo constructor functions aur prototype based inheritance ko use karte hain
// classes ES6 me introduce hui thi jisme hum easily constructor aur methods define kar sakte hain
// classes ke andar hum constructor method define karte hain jo object banane ke liye use hota hai aur dusre methods bhi define kar sakte hain jo prototype me add hote hain


// ++++++++++++++++++++++++++++++++++ prototype kya hota hai ? ++++++++++++++++++++++++++++++++++++++++


// prototype ek object hota hai jo dusre object ke properties aur methods ko inherit karne ke liye use hota hai
// jab hum ek object banate hain to wo uske constructor function ke prototype ko apna __proto__ banata hai
// javacscript haar nahi maanti hai ki humne ek method ko ek object me define kiya hai balki wo uske prototype me bhi dhundti hai

// Array ---> object --> null
// jab hum array ke kisi method ko call karte hain to javascript pehle array me dhundti hai agar nahi milta to wo uske __proto__ me jati hai jo ki object ko point karta hai aur waha dhundti hai
// agar waha bhi nahi milta to wo uske __proto__ ke __proto__ me jati hai jo ki null ko point karta hai aur yaha search khatam ho jata hai


// hum keh sakte hai JS me har ek chiz ek object hai chahe wo function ho ya array ho ya normal object ho sabka ek prototype hota hai jo uske properties aur methods ko inherit karne ke liye use hota hai.