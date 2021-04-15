r =  (a,b) => a+b

result = r(1,2)

console.log(result)

// arrow fns dont have this, it actually take the this 
//of outer scope

//arrow fns dont have 'arguments

//cant be called with 'new'

function add(i,j){
    a = i, b = j
    return this.a + this.b
}


let group = {
    title:"Our Group",
    students: ["John", "Will", "Alice"],

    showList(){
        this.students.forEach(
            s => console.log(this.title+':'+s)
        )
    }
}


group.showList();
console.log(group.toString());

//Object