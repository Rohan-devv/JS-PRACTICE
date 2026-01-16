const user = {
    name: 'Rohan Pal',
    age: 22,
    company: 'TechnoFunnel'
}

const { name: naam , age, company } = user

console.log(name);

// Destructuring eses hoti hai ki hum object ke andar se directly properties ko extract kar sakte hain aur unko variables me assign kar sakte hain.

// JSON - JavaScript Object Notation pehle api se data ata tha XML format me lekin ab JSON format me aata hai jo ki JavaScript object jaisa hi hota hai.
// bss isme keys hamesha double quotes me hoti 

// {
//     "name": "Rohan Pal",
//     "age": 22,
//     "company": "TechnoFunnel"
// 
// }

/*  
Very Important Note:

// ye ek JSON format hai jo ki JavaScript object jaisa hi dikh raha hai lekin ye string hota hai.
// jab api se data mile to ye string hota hai hume isko JavaScript object me convert karna padta hai jiske liye hum JSON.parse() method ka use karte hain.
// aur jab hume JavaScript object ko JSON format me convert karna hota hai to hum JSON.stringify() method ka use karte hain.
// ye dono methods JavaScript ke built-in methods hain jo ki JSON data ko handle karne ke liye use hote hain.

response.json() ek method hai jo:

✔ JSON string ko JavaScript object me convert karta hai
✔ Promise return karta hai (asynchronous hota hai)

Matlab:
JSON.parse() ka browser version jo fetch() ke andar pehle se built-in hai--> crux of json.
👉 response.json() internally JSON.parse() hi use karta hai
but difference ye hai ki response.json() async hota hai.
*/  
