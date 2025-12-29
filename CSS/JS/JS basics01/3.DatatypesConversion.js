/*
there are some interesting case when converted into number:-
1. "33" => 33
2. "33abc" =>  NaN
3. true=>1
4. false=>0
5. undefined=>NaN
6. null=>0
7. "Aryan"=>NaN
*/


let score = "33abc"
console.log(typeof(score))
console.log(score)

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

// console.log(typeof(NaN)) //NaN is a special type of number(but it is actually not a number)

/*
there are some interesting cases when converting into boolean:-
1. 1=> true
2. 0=> false
3. ""=> false
4. "Aryan"=> true
*/

let loggedIn = " "
let BooleanIsloggedIn= Boolean(loggedIn)
console.log(BooleanIsloggedIn)

let StringNumber="33"
let number= Number(StringNumber)
console.log(typeof number)
console.log(number)