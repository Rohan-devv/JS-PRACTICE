
const promiseOne = new Promise(function (resolve, reject){

    // async task
   // DB call, file read , network request

    setTimeout(function(){

        console.log('async task1 complete')
        resolve()

    },1000)
})

promiseOne.then(function(){
    console.log("promise resolve ")
})
    
    

new Promise(function(resolve, reject){

    setTimeout(function(){

        console.log('async task2 complete')
        resolve()

    },1000)
}).then(function(){
    console.log('promise 2 resolved ')
})





const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('promise three ')
        resolve({user: 'Rohan pal', class: 'ece'})
    },1000)
})

promiseThree.then(function(data){
    console.log(data);

}) 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = true
      if(!error){
        resolve({user: 'Rohan pal from promise four', class: 'ece from promis four'})
      }
      
      else{
        reject("something went wrong")
      }
    },1000)
})

promiseFour
.then(function(data){
    console.log(data);
    return data.user

}).then(function(chainedData){
     console.log(chainedData)
})
.catch(function(error){
    console.log(error)

})
.finally(()=> console.log('This promise is either resolve or rejected'))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = true
      if(!error){
        resolve({user: 'java', class: '123'})
      }
      
      else{
        reject("ERROR : something went wrong")
      }
    },1000)
})

async function consumePromiseFive(){
    try{

        let response = promiseFive
        console.log(response)

    }
    catch(error){
          console.log(error)
    }
}

consumePromiseFive()




async function getAllUser(){
    try{

        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() // isme bhi await lagana pdega kyki ye bhi time leta hai data ko json me convert karne me
        console.log(data)

    }

    catch(error) {
        console.log(error)

    }
}

getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{

    return response.json()

})
.then((data)=>{

    console.log(data)

}).catch((error) => {

    console.log(error)

})







/*

⭐ FINAL COMPLETE SUMMARY (Hinglish — One Go)
1️⃣ JavaScript me fetch() likhte hi turant data nahi milta

JS engine sirf ek pending Promise return karta hai.

2️⃣ Actual network request JavaScript nahi karta

fetch() request browser / Node Web APIs ko de deta hai.
Wahi background me request bhejta hai → JS engine free ho jata hai.

3️⃣ Promise ke andar do callback queues hoti hain

onFulfilled[] → .then() wale callbacks

onRejection[] → .catch() wale callbacks

Ye arrays internal promise job queue ka part hote hain.

4️⃣ MOST IMPORTANT: HTTP errors fetch ko reject nahi karte

Agar server ne koi bhi HTTP response bheja
✔ 200
✔ 201
✔ 400
✔ 404
✔ 500
✔ koi bhi status code
👉 Promise resolve hota hai → onFulfilled[] me jaata hai

Reason: response aaya hai → failed nahi hai.

5️⃣ fetch() sirf network-level failures par reject hota hai

Agar:

❌ Network down ho
❌ Internet nahi ho
❌ DNS resolve na ho
❌ Server tak request pahoch hi na paaye
❌ CORS block ho jaye

Tab hi:

👉 Promise reject hota hai → onRejection[] me jaata hai

6️⃣ Browser jab response de deta hai

Promise resolve ya reject ho jata hai

.then() / .catch() → microtask queue me chale jaate hain

Event loop baad me unhe execute karta hai (call stack empty hone par)


   
 */

// ++++++++++++++++++++++++++++++++ Promise ++++++++++++++++++++
/* 

what is promise ?
A promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    It allows you to write asynchronous code in a more manageable and readable way by providing a way to handle success and failure cases.
    It can be in one of three states:
    1. Pending: The initial state of a promise, indicating that the asynchronous operation is still in progress.
    2. Fulfilled: The state of a promise when the asynchronous operation completes successfully, resulting in a resolved value.
    3. Rejected: The state of a promise when the asynchronous operation fails, resulting in a reason for the failure.


    .then() : The .then() method is used to specify the callback functions that will be executed when a promise is fulfilled (resolved) or rejected. It takes two arguments: the first is 
    reject() function to handle the rejection case
*/
