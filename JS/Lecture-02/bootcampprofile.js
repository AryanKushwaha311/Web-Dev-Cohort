 // String
 let name = "Rohit";

 //  Number
 let age = 25;

 //Boolean - true,false
 let isPaid = true;

 //null - "khali"
 let favouriteClass = null
  // Remember "null" with temperature example.
  
 //undefined- "baad mai dekhe ge!"
 let hometown;
 
 // array
 let skills = ["html","css","javascript",]

 //
 let studentProfile={
    name: "Aryan",
    age: 21,
    isPaid:true,
    skills:["HTML","CSS","JS"],
    favouriteClass:null,
    hometown:undefined
 }  

 console.log(studentProfile.skills[0 ]); 
 
 function greet(){
    console.log("hello");
 }

 console.log(typeof greet());
 


 //processing - if/else

    let wheather = "rainy";
    if(wheather="rainy"){
        console.log("bring umbrella...");
         
    }
    else{
        console.log("no need to worry...");
    }

// pizza guess
let numberOfGuest = 8;

let pizzaSize;

if(numberOfGuest<=2){
    pizzaSize="small size pizaa....";
}
else if(numberOfGuest <=5 && numberOfGuest>2) {
    pizzaSize="medium size pizza....";  
}
else if(numberOfGuest>5 && numberOfGuest<=10){
    pizzaSize="large size pizza....";
}
else{
    pizzaSize="order multiple pizaa....";
    
}

console.log(pizzaSize)