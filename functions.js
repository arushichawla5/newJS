function sayMyName(){
    console.log("arushi")
}
//sayMyName()

// function add(num1,num2){ //parameters
//     console.log(num1+num2)
// }

function add(num1,num2){ //parameters
   
    return num1+num2
}
const result = add(3,2) //arguments
//console.log(result)

function loginUserMessage(username = "sam"){
    if(!username){ //same as username === undefined
        console.log("please enter a username")
        return
    }
    return `${username} just Logged in`
}

// console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage(""))

function calculateCartPrice(val1,val2, ...num1){ //... also kmown as rest operator 
    return num1
}
//console.log(calculateCartPrice(200,400,500,600))

const user={
    username :"hitesh",
    price: 199
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`)
}

// handleObject(user)

handleObject({
    username:"sam",
    price: 999
})

const arr=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(arr))
console.log(returnSecondValue([200,2000,1000,300]))