const process = require("process");

const person = { name: "David", email: "dm@gmail.com" };

Object.freeze(person);

const david1 = person;

//Assign
const david = { ...person };

david.car = "Fiat 500";

person.car = "Toyota";

console.log(david);
console.log(david1);
console.log(person);

//process.argv examples
var array = process.argv.slice(2);

switch (array[0]) {
  case "insult":
    console.log(array[0], "smells quite badly.");
    break;
  case "compliment":
    console.log(array[0], "is really cool.");
    break;
  default:
    console.log("Sorry, that is not something I know how to do.");
}

var arguments = process.argv;
function add(a, b) {
  return parseInt(a) + parseInt(b);
}
var sum = add(arguments[2], arguments[3]);
console.log("Addition is ", sum);

process.argv.forEach((value, index, array) => {
  console.log(`${index}: ${value}`);
});

const carList = [
  {
    id: 13,
    brand: "BMW",
    model: "X5",
    price: "$23000",
    release_date: "2015-10-12",
  },

  {
    id: 9,
    brand: "Audi",
    model: "S3",
    price: "$35000",
    release_date: "2013-08-23",
  },

  {
    id: 11,
    brand: "Bugatti",
    model: "Veyron",
    price: "$500000",
    release_date: "2006-02-10",
  },

  {
    id: 7,
    brand: "VW",
    model: "Polo Punto",
    price: "$8000",
    release_date: "2018-05-03",
  },

  {
    id: 4,
    brand: "Fiat",
    model: "Punto",
    price: "$6000",
    release_date: "2017-01-25",
  },
];

function search(value) {
  return carList.filter((car) => car.model.includes(value));
}
var list = search(...arguments);
console.log("Filtered list: ", list);
