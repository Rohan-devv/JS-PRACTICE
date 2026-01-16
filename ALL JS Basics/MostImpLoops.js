//const myNums=[1,2,3,4,5,6,7,8,9] 

  //const newNums = myNums.filter( (num) => num > 4)


//   const newNums2 = myNums.filter( (num) => {
//     return num > 4
//   })



// +++++++++++++++++++++++++++++++++++++++ forEach ka use +++++++++++++++++++++++++++++++++++++++++

/* 

const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }

})

*/

// +++++++++++++++++++++++++++++++++++++++++ filter ka use ++++++++++++++++++++++++++++++++++++++++
/*
const users = [
  { id: 1, name: "Rohan", age: 22 },
  { id: 2, name: "Amit", age: 24 },
  { id: 3, name: "Sara", age: 21 }
];

 const result = users.filter ((items) => items.age >21)

  
 console.log(result);
*/

 //++++++++++++++++++++++++++++++++++++++++++++ map ka use +++++++++++++++++++++++++++++++++++++++

/*
const myNums=[1,2,3,4,5,6,7,8,9]

const newNums = myNums.map((num)=> {
    return num+10
})
*/


// +++++++++++++++++++++++++++++++++++++++++ reduce ka use ++++++++++++++++++++++++++++++++++++++++
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
console.log(totalAmount) 



/* ++++++++++++++++++++++++++++++++++++++++++ Summary of array methods ++++++++++++++++++++++++++++++++++++++++++

1. forEach:
- Use: Iterating over an array to perform side effects.
- Returns: undefined.
- Example: Logging each item in an array.

2. map:
- Use: Transforming each item in an array to create a new array.
- Returns: A new array with transformed items.
- Example: Creating a new array with each number increased by 10.

3. filter:
- Use: Filtering items in an array based on a condition.
- Returns: A new array with items that meet the condition.
- Example: Creating a new array with numbers greater than 4.

4. reduce:
- Use: Reducing an array to a single value by accumulating results.
- Returns: A single value (e.g., sum, product).
- Example: Calculating the total amount in a shopping cart.
*/