/*PROPERTIES v/s METHODS

1.Property (.length):-
    It stores a value (the number of characters in the string).
    It does not perform any action. 
    No () needed.

2.Method (.toLowerCase()):-
    It performs an action (converts the string to lowercase).
    It returns a new value.
    Needs () to execute.
*/


// ---------------STRING METHODS---------------

let email = "ARyanKush34@gmail.com"
console.log(email.toLowerCase())
console.log(email.indexOf("u"))
console.log(email.slice(0,-3))
console.log(email.substring(0,-3))  //same as slice but treated negative values treated as 0.
