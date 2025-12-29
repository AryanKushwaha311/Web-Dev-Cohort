/* THERE ARE TWO WAYS TO CALL OBJECT ELEMENTS:-
1. .METHOD
2. [] METHOD
*/

user1={
    name:"Aryan",
    "Full Name":"Aryan Kushwaha",
    email:"aryankush123@gmail.com",
    age:18
}
console.log(user1.name)
//console.log(user1."Full Name")  //ERROR :- HERE WE HAVE TO USE METHOD 2 THERE IS NO WAY WE CAN DO THIS USING METHOD 1.
console.log(user1["Full Name"])

console.log(user1["name"])  // HERE WE HAVE TO USE "INVERTED COMMAS" FOR KEYS BECAUSE IN BACKEND THE KEYS ARE STORED 
//                             IN STRING FORMAT.

//UPDATE EXISTING VALUES IN OBJECTS:-
user1.email="aryankush@gmail.com"
console.log(user1.email)

//FREEZE:-
// Object.freeze(user1)        //AFTER FREEZING WE ARE UNABLE TO UPDATE ANY VALUE
// user1.email="aryan"
// console.log(user1.email)
