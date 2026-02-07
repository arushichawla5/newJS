//singleton
//object.create
//object literals
const mySym = Symbol("Key1")
const jsUser={ //object literal
    name:"hitesh", 
    age: 21,
    [mySym]:"myKey1", //if u wanna refer as a symbol then use sq brackets.
    location:"Jaipur",
    email: "hitesh@google.com",
    isLoggegIn: false,
    lastLoginDays:["Monday","Tuesday"]
}
// console.log(jsUser[mySym]);
// console.log(jsUser["email"]); // another way of accessing  

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser); 
jsUser.email = "hitesh@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())

//singleton

// const hingeUser= new Object() //singleton object
const hingeUser = {} //non singeton object
hingeUser.id = "123abc"
hingeUser.name = "vivaan"
hingeUser.isLoggegIn = false
// console.log(hingeUser) 

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstName : "hitesh",
            lastName : "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1, obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2} //spread operator
//console.log(obj3)

// const users=[
//     {

//     }
//     {
//          //array of objects
//     }
// ]

// console.log(hingeUser)
console.log(Object.keys(hingeUser))
console.log(Object.values(hingeUser))
console.log(Object.entries(hingeUser))
console.log(hingeUser.hasOwnProperty('name'))

const course = {
    courseName : "js",
    price : 999,
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course //destrcting   
console.log(instructor)

// {
//     name: "hitesh",
//     courseName: "java", //JASON
//     price:"free"
// }


