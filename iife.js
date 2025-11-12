(function chai(){
    console.log("IIFE function chal gaya")
})();// ; lagana jaruri hai kyuki agar aage koi line aati hai to wo is function ko as a function declare kar lega aur error dega


(function chai(){
    console.log("IIFE function chal gaya")
})();

((name)=> {
    console.log(`Hello ${name}, IIFE arrow function chal gaya`)
})('Rohan Pal')

// IIFE => Immediately Invoked Function Expression-- immediately matlab jese hi function define ho jaye turant hi wo call ho jaye
// Iska use hum tab karte hai jab hume function ko sirf ek baar call karna hota hai aur uske baad us function ki jarurat nahi hoti hai
// Global scope me pollution nahi hota hai kyuki ye function apne andar hi rahata hai aur bahar se access nahi kiya ja sakta hai