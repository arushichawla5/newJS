// let a=10
// const b=20

//{} ->scope
let a=100 //global scope
if(true){
    let a=10
    const b=20  //block scope
    var c=30
    // console.log("Inner:",a)
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
} 
if(true){
    const username="hitesh"
    if(username=== "hitesh"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(username)
}
// console.log(username)

function addne(num){
    return num+1
}
addne(1)

const  addTwo=function(num){
    return num+2
}
addTwo(5)