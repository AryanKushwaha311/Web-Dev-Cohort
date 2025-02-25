let numberOfGuests = 4;
let pizzaSize;

if(numberOfGuests <= 2){
    pizzaSize='your suitable choise should be SMALL'
}
else if(numberOfGuests<=5){
    pizzaSize="your suitable choise should be REGULAR"
}
else {
    pizzaSize="your suitable choise should be LARGE"
}

console.log(pizzaSize)