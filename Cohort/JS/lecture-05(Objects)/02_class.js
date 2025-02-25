/*
1. CLASS
    class is a blueprint of the objects.

2. CONSTRUCTOR
   * Class->Object-> aur Object ko construct krne ke liye Constructor chaye hota h
   * If we did not make any constructor then the compiler automatically creates a default Constructor

*/


class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname
    }
    getfullname(){
        return this.fname+" "+this.lname
    }
}

const P1 = new Person("Aryan","Kushwaha")
const P2 = new Person("Piyush","Garg")

console.log(P1.getfullname())
console.log(P2.getfullname())