function one(){
    const username = "Rohan"

    function two(){
        const website = "rohan.com"
        console.log(username);
    }
    // console.log(website) // error
    two()
}
console.log(username) // error
one()

// ++++++++++++++++++++++ Hoisting ++++++++++++++++++++++

addOne(5)// ye kaam karega because function declaration me jo function hai wo upar jata hai
 function addOne(num){
    return num+1
 }  

addTwo(5) // ye error dega because function expression me jo function hai wo upar nahi jata
 const addTwo = function(num){
    return num+2
 }