////          METHOD-01
// let Score = 2;
// let Grade;

// if(Score>=90){
//     Grade = 'A'
// }
// else if(Score>=80){
//     Grade = 'B'
// }
// else if(Score>=70){
//     Grade = 'C'
// }
// else if(Score>=60){
//     Grade = 'D'
// }
// else{
//     Grade = 'F'
// }

// console.log(Grade)

//// METHOD-02
function calculateGrade (Score){
        if(Score>=90){
            return 'A'
        }
        else if(Score>=80){
            return 'B'
        }
        else if(Score>=70){
            return 'C'
        }
        else if(Score>=60){
            return 'D'
        }
        else{
            return 'F'
        }        
}

result = calculateGrade(9)
console.log(result)