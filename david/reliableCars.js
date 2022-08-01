function car (title){
    this.title = title;
    reliable = false;
};

car.prototype.change = function() {
    this.reliable = !this.reliable;
};

function run() {
console.log("This is another todo app");

let carList = [];
carList.push(new car('Fiat'));
carList.push(new car('Honda'));
carList.push(new car('Mazda'));
carList.push(new car('Zastava'));
carList.push(new car('Toyota'));
carList.push(new car('BMW'));

console.log("Car array: ", carList);

console.log("Show reliable cars: ", 
    carList.map((oneCar, index) =>{
    if (index === 1 || index === 2 || index === 4) {
        oneCar.change();
        return oneCar;
    }
    else {
        return oneCar;
    }
}))

console.log("Print only reliable cars from the list: ", carList.filter((oneCar) => oneCar.reliable));
console.log("Print not reliable cars from the list: ", carList.filter((oneCar) => !oneCar.reliable));

};

module.exports = {
    run,
};