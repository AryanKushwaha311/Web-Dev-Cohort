/*
1. In JS or any language ,the story begun with the two things:- the DATA we have and the OPERATIONS we can perform
 on that data 
*/

// let nothing = null
// let num=23
// let sym = Symbol()

// console.log(sym)
// console.log(typeof num)
// console.log(typeof undefined)

//---------Types to convert data into number--------------
let num1="42"
let ConversionNum=Number(num1)      //Standard Approach
let ConversionNum2=+num1
let ConversionNum3=parseInt(num1)

console.log(typeof ConversionNum)
console.log(typeof ConversionNum2)
console.log(typeof ConversionNum3)

//----------Types to convert data into String--------------

let str = 43
let convertedString= String(str)


//---------------COMPARISION OPERATORS---------------------
 
let x = 5
let y = 10
console.log(x==y)       //only check data
console.log(x===y)      //also check datatype or Also called Strict Comparision

