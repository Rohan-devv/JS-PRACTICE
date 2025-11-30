// ++++++++++++++++++++++++++++++++++++++++++ Asynchronous JavaScript ++++++++++++++++++++++++++++++++++++++++++
/*

Asynchronous JavaScript ka matlab hai ki kuch operations aise hote hain jo turant complete nahi hote, jaise ki network requests, file reading, timers, etc.

javascript vese to by default single-threaded synchronous hai, lekin asynchronous operations ke through hum multiple tasks ko ek sath handle kar sakte hain bina main thread ko block kiye.

ab agr jses single threaded hai to slow ho jayegi sahi baat hai agr javascript ka V8 engine hi akele sare kaam kare to wo slow ho jayega,
 isliye asynchronous operations ke liye javascript background me Web APIs ka use karti hai jo ki browser ya Node.js runtime environment provide karta hai.

 Blocking code vs Non Blocking code:

Blocking code wo hota hai jo ek task complete hone tak dusre tasks ko rok deta hai.jese ReadFileSync() function.
Non-blocking code wo hota hai jo ek task complete hone tak dusre tasks ko rokta nahi hai.jese ReadFile() function.

Non blocking humwsha ke liye achha nahi hai kuch situations me blocking code use karna better hota hai jese ki critical sections me jaha data consistency important hoti hai.
jese ki user registration me hume sure hona padta hai ki data sahi tarike se database me store ho gaya hai uske baad hi agla step lena chahiye.


1️⃣ Callbacks
Callbacks asynchronous programming ka sabse basic form hai.jab bhi koi asynchronous operation complete hota hai to wo ek callback function ko call karta hai jise hum pehle se define karte hain.
Example:
setTimeout(function(){
    console.log("This is a callback after 2 seconds");
}, 2000);
2️⃣ Promises
Promises asynchronous operations ko handle karne ka ek modern aur powerful way hai.
Promise ek object hota hai jo future me kisi asynchronous operation ke complete hone ka indication deta hai.
promise done 

Javascript Engine :

iske andar do chize hoti hai 
1. Call Stack : jaha function calls store hote hain aur execute hote hain
2. Memory Heap : jaha objects store hote hain
3. Event Loop : ye continuously check karta hai ki call stack empty hai ya nahi agar empty hai to ye microtask queue se promises ke .then() / .catch() wale callbacks ko call stack me push kar deta hai taaki wo execute ho sake.
4. fetch API / Web APIs : ye browser ya Node.js runtime environment ke part hote hain jo asynchronous operations ko handle karte hain jaise ki network requests, timers, etc.
5. fetch ko alag se priority di jati hai taaki wo jaldi complete ho sake aur uske .then() / .catch() wale callbacks ko microtask queue priority queue bhi  me jaldi bheja ja sake.


*/