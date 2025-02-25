// Function.prototype.describe=function(){
//     console.log(`Function name is ${this.name}`)
// }
// function greet(name){
//     return `hello ${name}`
// }

// greet.describe

// function createCounter(){
//     let count=0
//     return function(){
//         count++;
//         return count 
//     }
// }

// function onef(){
//     let myName="hitesh"
// }
// console.log(myName )






//6. IIFE(Immediately Invoked Function Expression)
/*
    in Simple Terms,
    An IIFE is a special type of function in JavaScript that runs immediately after it is defined. Normally,when we create
    a function, we have to call it separately, but with IIFE, the function executes on its own without calling it
     manually.

    To create an IIFE, we wrap the function inside parentheses () and add another () at the end to execute it immediately. 
*/
(function(){
    console.log("IIFE Executed!!!")
})()
