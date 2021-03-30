// var & let

//1. scope : region

// function run(){
//     var foo = "FOO"
//     let bar = "BAR"

//     console.log(foo, bar)

//     {
//         var moo = "Moo" //global
//         let baz = "Bazz" //scope  specific
//         console.log(moo, baz)
//     }
//     console.log(moo)
//     console.log(baz)
// }

// run()

//2. Hoisting
// function run(){
//     // var foo;


//     console.log(foo)
//     var foo = "FOO"
//     console.log(foo)
// }
// run()

//3. redecleration
// let foo = "foo1"
// let foo = "foo2"