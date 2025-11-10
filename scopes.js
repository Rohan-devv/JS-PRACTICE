//{} --> scope ye hota hai javascript  me

// 1. Global Scope -- jo bhi variable ya function global scope me declare hota hai wo pura program me accessible hota hai
// 2. Functional Scope -- jo bhi variable ya function ek function ke andar declare hota hai wo sirf usi function ke andar accessible hota hai
// 3. Block Scope -- jo bhi variable ya function ek block ke andar declare hota hai wo sirf usi block ke andar accessible hota hai
// 

if(true){
    let a = 10;
    const b = 20;
    var c = 11;
}
console.log(c);