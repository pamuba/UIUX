// let promise = new Promise(function(resolve, reject){
//     //resolve
//     //reject
// })

//states
//pending

//resolved = fulfillled
//reject = rejected

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("the secret")
        // reject("Some error happened")
    }, 2000)
});

promise
.then(
    data=>{console.log(data)},
    // error => console.log(error)
).catch(
    error => console.log(error)
).finally(
    ()=>console.log("Finally always runs")
)

//callback hell in js