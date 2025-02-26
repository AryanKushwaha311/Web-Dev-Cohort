// function prepareChai(type){
//     if(type.toLowerCase()==="Masala chai"){
//         console.log("Adding spices to chai..")
//     }
//     else{
//         console.log("Preparing regular chai...")
//     }
// }

// prepareChai("Masala chai")
// prepareChai("green tea")


//PROGRAM_01

// function bill(amount){
//     amount=Number(amount)
//     if(amount>=1000){
//         console.log("yeahhhh!!! You got the 10% discount on your bill")
//         total_bill = (amount*90)/100
//         return (`Your total bill is ${total_bill}`)
//     }
//     return amount
// }

////METHOD_02
// return amount > 1000 ? amount * 0.9 : amount
// }

console.log(bill("10000"))

//PROGRAM_02

// function TrafficLight(color){
//     color=color.toLowerCase()

//     if(color==="red"){
//         return "STOP!!!"
//     }
//     else if(color==="yellow"){
//         return "SLOW DOWN...."
//     }
//     else{
//         return "GO!!!!"
//     }
// }

// console.log(TrafficLight("red"))
// console.log(TrafficLight("YELLow"))
// console.log(TrafficLight("green"))


// --------IMPORTANT------------

function checktruthyValue(value){
    if(value){
        console.log("Truthy")
    }
    else{
        console.log("Falsy")
    }
}

checktruthyValue(1)  //true
checktruthyValue(0)  //false
checktruthyValue("hitesh")  //true
checktruthyValue("")      //false
checktruthyValue([])      //true
checktruthyValue([1,2,3]) //true


/*
--------------------------------REASONS--------------------------

 Truthy & Falsy Values in JavaScript
✅ Truthy Values: (Considered as true in conditions)
Any non-zero number (e.g., 1, -100, 3.14)
Any non-empty string (e.g., "hello", "0")
Objects and arrays (e.g., {}, [])
Boolean true
Functions

❌ Falsy Values: (Considered as false in conditions)
0
"" (empty string)
null
undefined
NaN
false
*/




