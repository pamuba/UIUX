// function add(a=1,b=10){
//     // console.log("SUM:",a+b)
//     return a+b
// }

// result = add(2)

// console.log(result)

//rest
// function add(a,...args)
// {
//   sum = 0
//   for (let a  of args) {
//      sum = sum + a
//   }
//   console.log("SUM:",sum)
//   console.log( args instanceof Array)
// }

// add(1,1)
// add(1,1,1)
// add(1,1,1,1,1,1,1,1)

//arguments
// function add()
// {
//   sum = 0
//   for (let a  of arguments) {
//      sum = sum + a
//   }
//   console.log("SUM:",sum)
//   console.log( arguments instanceof Array)
// }

// add(1,1)
// add(1,1,1)
// add(1,1,1,1,1,1,1,1)
///////////////////////////////////////////////////////////

//SPREAD
// let arr = [3,5,7,1,2]
// let arr1 = [22,55]
// console.log(Math.max(...arr, ...arr1, 101, 202))


// timer
// setTimeout(function(){
//     console.log("Time Over")
// }, 2000)

setInterval(function(){
    console.log("Again")
}, 2000);
