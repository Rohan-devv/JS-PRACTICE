function multiplyBy5(num){
    return num * 5;
}
multiplyBy5.power = 2;

console.log(multiplyBy5(10)); // Output: 50
console.log(multiplyBy5.power) // Output: 2
console.log(multiplyBy5.prototype) // Output: {} yaha pe prototype us function ka prototype hai jo ek empty object hai

// iska matlab functions are objects in javascript