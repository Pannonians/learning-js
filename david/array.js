const person = (firstNeme, lastName, age, gender) => {
  const fullName = `${firstNeme} ${lastName}`;
  const fullInfo = `${firstNeme} ${lastName} ${age} ${gender}`;

  return {
    firstNeme,
    lastName,
    fullName,
    age,
    gender,
    fullInfo,
  };
};

const car = (brand, color, doors, engine, yearsOld) => {
  return {
    brand,
    color,
    doors,
    engine,
    yearsOld,
  };
};

function run() {
  console.log("This is exercise related to Arrays!!");
  const rajna = person("Rajna", "Mandic", 34, "female");
  const senka = person("Senka", "Mandic", 38, "female");

  const array = [
    person("David", "Mandic", 34, "male"),
    person("Dusan", "Mandic", 2, "male"),
    rajna,
    senka,
  ];

  console.log(array);
  console.log("Array length: ", array.length);

  //Initials in array
  console.log(
    "Initials in array",
    array.map((onePerson) => {
      const initials = onePerson.firstNeme[0] + onePerson.lastName[0];
      return {
        ...onePerson,
        initials,
      };
    })
  );
  //All info related to person in one sentance
  console.log(
    "All info related to person in one sentance ",
    array.map((onePerson1) => {
      if (onePerson1.gender === "female") {
        const sentance =
          onePerson1.fullName +
          " is " +
          onePerson1.age +
          "." +
          " She is " +
          onePerson1.gender;
        return {
          ...onePerson1,
          sentance,
        };
      }
      const sentance =
        onePerson1.fullName +
        " is " +
        onePerson1.age +
        "." +
        " He is " +
        onePerson1.gender;
      return {
        ...onePerson1,
        sentance,
      };
    })
  );

  //Filter
  console.log(
    "Filter age: ",
    array.filter((oneInArray) => oneInArray.age < 10)
  );
  console.log(
    "Filter gender: ",
    array.filter((onePerson1) => onePerson1.gender === "male")
  );

  //Find
  console.log(
    "Find Dusan ",
    array.find((findDusan) => findDusan.firstNeme === "Dusan")
  );

  //length
  console.log("length: ", array.length);

  //Car array
  const car1 = car("BMW", "blue", 4, "petrol", 2006);
  const car2 = car("Mercedes", "white", 4, "diesel", 2010);

  const arrayCar = [
    car1,
    car2,
    car("Honda", "silver", 2, "petrol", 1988),
    car("Mazda", "red", 2, "petrol", 2000),
  ];

  console.log("Array car: ", arrayCar);
  console.log(
    "Filter engine: ",
    arrayCar.filter((oneCar) => oneCar.engine === "petrol")
  );
  console.log(
    "Finde 4 dors: ",
    arrayCar.find((oneCar) => oneCar.doors === 4)
  );

  console.log(
    arrayCar.map((oneCar) => {
      const short =
        oneCar.brand[0] + oneCar.color[0] + oneCar.doors + oneCar.yearsOld;
      return {
        ...oneCar,
        short,
      };
    })
  );

}

module.exports = {
  run,
};
