/*
1. OBJECT:-Object is an entity which has some properties and functionality(i.e METHODS in Object Oriented way)
   Eg.Pencil,chair,chai,etc.

2. FUNCTION v/s METHOD???
   if the function is stand alone then it is said to be "FUNCTION" but if the function is declare inside the Object then
   it is said to be "METHOD".

3. WHY JS IS CREATED?
  JavaScript (JS) was created in 1995 by Brendan Eich at Netscape to make web pages interactive inside the browser.

4. WHAT IS "new" KEYWORD do??
    The new keyword is used to create a new instance of an object, allocating memory for it in the heap memory. It is commonly used with constructor functions and classes.

    How new Works Step by Step:
    When we use new with a constructor function or class, JavaScript does the following:

    1️⃣ Creates an empty object in heap memory.
    2️⃣ Links this new object to the prototype of the constructor function or class.
    3️⃣ Calls the constructor function with this referring to the new object.
    4️⃣ Returns the new object automatically.

5. 
*/

const obj1={
    fname:"aryan",
    lname:"Kushwaha",
    getFullname: function(){
        if(this.lname!==undefined) return `${this.fname} ${this.lname}`
        return this.fname
    }
}

const obj2={
    fname:"Taran",
    lname:"Singh",
    getFullname: function(){
        if(this.lname!==undefined)return `${this.fname} ${this.lname}`
        return this.fname
    }
}

// console.log(obj1)
// console.log(obj1.getFullname())
console.log(obj2.getFullname())