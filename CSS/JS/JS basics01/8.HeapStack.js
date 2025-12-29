// primitive(stack) and Non-primitive(Heap)

let name="Aryan Kushwaha"
let anotherName=name
anotherName="Naman"

console.log(name)
console.log(anotherName)


let user1={
    name: "aryan",
    upi: "aryan@okhdbcbank"
}
let user2=user1
user2.name="Aryan Kushwaha"
console.log(user1.name)
console.log(user2.name)