// ARRAY

const myArr = new Array(1,2,3,4,5)
const players = ["ronaldo","kevin de bruyne","Ozil","Tony kroos"]

// console.log(myArr[3])


//Array Methods

/*
1. push method:-
  The .push() method returns the length of the array, not the index of the newly added element
*/
 
// let arr = []
// console.log(arr.push(22))
// arr.push(22)
// console.log(arr[0])

// 2. unshift method:-
//      The .unshift() method adds an element to the beginning of the array, but the main issue is that it shifts
//      all existing elements to the right, increasing their indexes.

// myArr.unshift(9)
// console.log(myArr)

// 3. shift method:-
//  The .shift() method in JavaScript removes the first element from an array and returns it. It also shifts all the
//  remaining elements to the left, decreasing their indexes.

// myArr.shift()
// console.log(myArr)

//4. includes method:-
// The .includes() method in JavaScript checks if an array contains a specific value and returns true or false.

// console.log(myArr.includes(9))

//5. indexOf method:-
//  The .indexOf() method in JavaScript returns the index of the first occurrence of a specified value in an
//  array (or string). If the value is not found, it returns -1.

console.log(myArr.indexOf(3))

//6. join method:-
// The .join() method in JavaScript converts an array into a string, with elements separated by a specified delimiter.

const newArr = myArr.join("*")
console.log(myArr)
console.log(newArr)

//7. slice and splice methods      ---->>>> VERY IMPORTANT

console.log("A",myArr)
const arr1 = myArr.slice(1,3)
console.log(arr1)
console.log("B",myArr)

const arr2 = myArr.splice(1,3)
console.log(arr2)
console.log(myArr)


