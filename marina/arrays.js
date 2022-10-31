

const createPerson = (firstName, lastName) => {
  return {
    firstName,
    lastName
  };
   
  };
const aleksandra = createPerson("Aleksandra", "Vukasinovic");
const david = createPerson("David", "Mandic");

const array = [
  createPerson("Nikolina", "Novakovic"),
  createPerson("Petar", "Vukmanovic"),
  aleksandra,david
];

const newArray = [...array, createPerson("Marina", "Jokic")];

console.log("array",array);

console.log("newArray", newArray);

console.log(
  'nadji Davida'
  , newArray.find((gdesi) => gdesi.firstName ==='David')
);





