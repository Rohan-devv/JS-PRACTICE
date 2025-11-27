// const promiseOne = new Promise(function (resolve, reject){

//     setTimeout(function(){

//         console.log('async task1 complete')
//         resolve()

//     },1000)
// })

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