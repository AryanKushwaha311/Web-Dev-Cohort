
function gradeFactory(marks){
    
let Grade;
if(marks<=100 && marks>=0){
    if(marks>=90){
        Grade='A';
    }
    else if(marks>=80 && marks<90){
        Grade='B';
    }
    else if(marks>=70 && marks<80){
        Grade='C';
    }
    else if(marks>=60 && marks<70){
        Grade='D';
    }
    else{
        Grade="Failed..."
    }
}
else{
    Grade="Invalid marks";
    
}

console.log(Grade);
}

gradeFactory(73);

