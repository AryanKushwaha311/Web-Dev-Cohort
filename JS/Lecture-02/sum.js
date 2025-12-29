let myArray = [1,2,3,4,5,6];

//method-01
// let sum=0;

// for(let i = 0;i<myArray.length;i++){
//     sum+=myArray[i];
// }

// console.log(sum);

//method-02
let anotherArray=[];

function sumfac(numbers){
    let sum=0;
    for(let i = 0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}

let result = sumfac(myArray);
console.log(result);

