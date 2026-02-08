let key=prompt("Enter the key you want to set")
let value=prompt("Enter the value you want to set")
localStorage.setItem(key,value)
localStorage.getItem(key)
console.log(`the value of ${key} is ${localStorage.getItem(key)}`)
if(key == "name" || key == "age"){
    localStorage.removeItem(key)
}
if(key == 0){
    localStorage.clear()
}