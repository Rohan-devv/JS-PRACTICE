const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descripter)
// {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}

// to kuch property esi hoti hoti hai jise hum change nahi kar sakte
// jaise ki Math.PI ko hum change nahi kar sakte
// kyuki iska writable false hota hai

const chai = {
    flavor: 'masala',
    price: 20,

    orederChai: function(){
        this.flavor = 'elaichi' // ye change ho jayega kyuki writable true hai
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'flavor'))
// {value: 'masala', writable: true, enumerable: true, configurable: true}


Object.defineProperty(chai, 'flavor',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, 'flavor'))
// {value: 'masala', writable: false, enumerable: false, configurable: true}


chai.orederChai()
console.log(chai.flavor) // masala
// ab ye change nahi hoga kyuki humne writable false kar diya hai


for (const [key, value] of Object.entries(chai)) {

    if(typeof value !== 'function'){

        console.log(`${key}: ${value}`)

    }

    
    
}

// sirf price: 20 print hoga kyuki humne enumerable false kar diya hai flavor ke liye