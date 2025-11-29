
/*

const promiseOne = new Promise(function (resolve, reject){

    setTimeout(function(){

        console.log('async task1 complete')
        resolve()

    },1000)
})

promiseOne.then(function(){
    console.log("promise resolve ")
})
    
    */

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