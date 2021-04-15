// (function(a,b){
//     console.log(a+b)
// })(11,22);


function outer(a,b){
    var outerA = 44;
    function inner(){
        var innerA = 99;
        console.log(outerA, ' ', a, ' ',b )
        function innermost(){
            console.log(outerA, ' ', a, ' ',b, ' ', innerA )
        }
        innermost();
    }
    inner()
    // return innermost;
}
outer(11,22)
// var refs = outer(11,22)
// //later on 
// refs()