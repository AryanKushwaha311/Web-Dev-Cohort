//-------------------ARRAY-----------------

let chaiTypes = ["Masala chai","Ginger chai","Green chai","Lemon Tea"]

console.log(chaiTypes[2])

console.log(`Total chai Types ${chaiTypes.length}`)

chaiTypes.push("Herbal tea")      //add value in array in the end 
console.log(chaiTypes)

chaiTypes.pop()                   //remove the last value from the array
console.log(chaiTypes)

const data=chaiTypes.pop()        //important to know
console.log(data)

//-----------------IMPORTANT------------------------
let index = chaiTypes.indexOf("Green chai")
console.log(index)
if(index!==-1){
    chaiTypes.splice(index,1)              // removes 1 element starting from index 2.
}
console.log(chaiTypes)
//----------------------------------------------------

//--------------------forEach()-----------------------
/*
forEach() Loop Execution
forEach() is a JavaScript array method that executes a function for each element in the array.
It takes a callback function with two parameters:
chai → Represents the current element.
index → Represents the current index (0-based).

forEach() loops through each item in chaiTypes.
index + 1 is used to display a 1-based index.
Each item is printed with its position.

*/
chaiTypes.forEach((chai,index)=>{
    console.log(`${index+1} ${chai}`)
})


//--------------------spread operator-------

let Receipe={
    name: "Chai",
    ingrediants:{
        Milk : "Full Cream Milk",
        Sugar : "1 tea spoon",
        iceCream:"2 scope ",
        spices:["Dalchini","Ginger"]
    },
    instruction:"Boil water"
}

let NewRecepie={
    ...Receipe,
    instruction:"Hot water"
}

console.log(NewRecepie.ingrediants.spices)

//--------------------ARRAY DESTRUCTING---------------------

// let chaiTypes = ["Masala chai", "Ginger chai", "Green chai"];
let [firstchai, secondchai] = chaiTypes;

console.log(firstchai);   // Masala chai
console.log(secondchai);  // Ginger chai

