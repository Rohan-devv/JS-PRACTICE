const arr = [1, 2, 3, 4, 5]

arr.forEach( (item) => {
    console.log(item);
})



arr.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})

const arrOfObject = [

    {
        username:"rohan", 
        price:1030
    },
    {
        username:"rohaf", 
        price:1030
    },
    {
        username:"rog", 
        price:1040
    },
    

]

arrOfObject.forEach( (item) => {
    console.log(item.username);
})


/*
callback function kya hota hai?
Jab bhi hum kisi function ke andar ek function ko argument ke roop me pass karte hai to us function ko callback function kehte hai
bss diff naam hai esko naam nhi dete hai kyuki ye function sirf ek baar use hota hai to isko naam dene ki jarurat nahi hoti hai

V.Imp --> forEach loop kuch return nhi karta hai
*/ 