let name="aarushi";
console.log(name.substring(1,6));
console.log(name.charAt(5));
console.log(name.indexOf("s"))
console.log(name.length)
console.log(name.toUpperCase())
const newString=name.substring(0,4)
console.log(newString)

const anotherString=name.slice(0,4);
console.log(anotherString)  
const newStrings="     aarshi    "
console.log(newStrings.trimEnd())
const url="https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-')) 

console.log(url.includes("aaruhsi"))

const gameName=new String('hitesh hc com')

console.log(gameName.split(' '))

const Name="hitesh"
 console.log(`hello my name is ${Name} and my age is 21`)