//const myNums=[1,2,3,4,5,6,7,8,9] 

  //const newNums = myNums.filter( (num) => num > 4)


//   const newNums2 = myNums.filter( (num) => {
//     return num > 4
//   })



// +++++++++++++++++ forEach ka use +++++++++++++++++

/* 
const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }

})
*/

// +++++++++++++++ filter ka use ++++++++++++++++++
/*
const users = [
  { id: 1, name: "Rohan", age: 22 },
  { id: 2, name: "Amit", age: 24 },
  { id: 3, name: "Sara", age: 21 }
];

 const result = users.filter ((items) => items.age >21)

  
 console.log(result);
*/

 //++++++++++++++++++++ map ka use ++++++++++++++++++++

/*
const myNums=[1,2,3,4,5,6,7,8,9]

const newNums = myNums.map((num)=> {
    return num+10
})
*/


// ++++++++++++++++++++ reduce ka use ++++++++++++++++++++
/*
const myNums=[1,2,3]

const sum = myNums.reduce( (acc, currval) => {
    console.log(`acc:${acc} and currval: ${currval}`)
    return acc + currval

}, 0)


console.log(sum);
*/
const cart = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 1499,
    quantity: 2,
    category: "Electronics",
    image: "earbuds.jpg"
  },
  {
    id: 2,
    name: "Men's T-Shirt",
    price: 499,
    quantity: 1,
    category: "Clothing",
    size: "L",
    image: "tshirt.jpg"
  },
  {
    id: 3,
    name: "Sports Water Bottle",
    price: 299,
    quantity: 3,
    category: "Sports",
    image: "bottle.jpg"
  }
];
const totalAmount = cart.reduce( (acc, item) => {
     return acc + (item.price * item.quantity)
}, 0)