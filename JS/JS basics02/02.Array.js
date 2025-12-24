const marvel_heros=["Thor","Ironman","Spiderman"]
const dc_heros=["Batman","Flash","Superman"]

//1. PUSH
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)


//2. CONCAT
// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

//3. SPREAD

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)

/*
    IN PUSH METHOD IT WILL CHANGE OR PUSH ELEMENTS IN THE EXISTING ARRAY, BUT IN CONCAT IT WILL CREATE A NEW ARRAY DUE 
    TO WHICH WE HAVE TO FIRST NEW VARIABLE AND STORE NEW ARRAY IN THAT VARIABLE LIKE IN LINE NO.10
*/

//4. FLAT

const another_array = [1,2,3,[4,5],6,[7,[8,9]]]
const another_new_array = another_array.flat(Infinity)   // Instead of "Infinity" we can give the number of depth we want to go. 
console.log(another_new_array)

//5. isArray and from

console.log(Array.isArray("Aryan"))     // IT WILL CHECK WHEATHER THE GIVEN ELEMENT IS ARRAY OR NOT.
console.log(Array.from("Aryan"))        // IT WILL CONVERT ANY DATATYPE INTO ARRAY.

console.log(Array.from({name:"Aryan"})) //***HERE IT IS AN OBJECT, SO WE HAVE TO TELL WHEATHER WE HAVE TO CONVERT "KEY"
// INTO ARRAY OR "VALUE" INTO ARRAY OTHERWISE IT WILL GIVE AN EMPTY ARRAY...


//6. Array.of
const score1 = 200
const score2 = 300
const score3 = 400

// console.log(Array.from(score1)) // ERROR:-Array.from() is used to create an array from things like strings, sets,
//  or other iterable objects, but a number is not iterable.

console.log(Array.of(score1,score2,score3))




