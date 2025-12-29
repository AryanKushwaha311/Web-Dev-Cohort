/*
1. whenever we put const,let,var it maeans that we are saying take this variable and assign this value in memory.
2. In const we cannot change the value of that variable once created.
3. Prefer not to use "var" beacuse of the block scope and function scope issue.
4. we can declare variable without any Keywords but it is a bad practice,
*/

const accountId=144553
let accountEmail="aryankush896@gmail.com"
var accountPassword="1234"
accountCity="Punjab"
let accountState;

accountEmail="aryan@gmail.com"
accountPassword="9876"
accountCity="Kanpur"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])