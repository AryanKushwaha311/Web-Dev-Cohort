/*
JavaScript does support slicing, but not in the way you tried with getName[0,4]. Instead, you have to use methods 
like slice() or substring().
*/

// 1.String Interpolation:
const name="Aryan Kushwaha"
const repoCount=50

// console.log(`Hello, My name is ${name}, and my repo count is ${repoCount}`)

// 2.String using new Keyword:
const getName = new String("Kushwaha-kc")
// console.log(getName)

// 3.String Methods: 
// console.log(getName[0])
// console.log(getName.__proto__)
// console.log(getName.toUpperCase())
// console.log(getName.charAt(2))
// console.log(getName.indexOf("a"))

// const newString=getName.substring(-3,7)
// console.log(newString)

// const anothreString=getName.slice(-8,4)
// console.log(anothreString)

// const String1="    aryan.  "
// console.log(String1.trim())

// const String2="https://aryan.com/aryan%20kushwaha"
// console.log(String2.replace("%20","-"))
// console.log(String2.replaceAll("%20","-"))

// console.log(String2.includes("aryan"))

const str = "Aryan-Kumar-Kushwaha"
console.log(str.split("-"))



