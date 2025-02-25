//method-01

// let myArray = [1,2,3,4,5]
// let sum=0;
// for(let i=0; i<myArray.length;i++){
//    sum+=myArray[i];
// }
// console.log(sum)

//method-02

let myArray = [1,2,3,4,5]

function calSum(numbers){
    let sum = 0
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    return sum
}

let result = calSum(myArray)
console.log(result)

console.log(calSum([1,2,3]))
