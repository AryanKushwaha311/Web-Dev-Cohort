/*
there are two types of datatypes:-1) Primitive
                                  2) Non-Primitive
And these types are decided by how JS stores them into the memory , if any datatype is stored using "call by value" then
it is primitive datatype. And if it is using "call by reference" then it is Non-Primitive datatype

1. PRIMITIVE DATATYPES(7)
   i)  String
   ii) Number
   iii)Boolean
   iv) Null
   v)  Undefined
   vi) Symbol
   vii)BigInt

2. NON PRIMITIVE/ REFERENCE DATATYPE
   i)  Array
   ii) Object
   iii)Functions 

3. RETURN TYPES OF VARIABLES
I)Primitive Datatypes
---------------------------------------------------
       Number =>     number
       String  =>    String
       Boolean  =>   Boolean
       null  =>      Object
       undefined  => Undefined
       Symbol  =>    Symbol
       BigInt  =>    bigint

II) Non-primitive Datatypes
----------------------------------------------------
       Arrays  =>     Object
       Function  =>   Object Function
       Object  =>     Object

*/

const myfunction = function(){
    console.log("Hello world")
}

const id= Symbol(123)
const anotherId=Symbol(123)
console.log(id==anotherId)

console.log(typeof myfunction)  // type of function is showing a "function" but it is exactly known as "Object function".
console.log(typeof id)          // type of Symbol is symbol