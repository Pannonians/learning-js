Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const createPerson = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;

  return {
    firstName,
    lastName,
    fullName,
    activated: true,
    title: jobTitles.random(),
  };
};

const jobTitles = [
  "Software Engineer",
  "Q/A Engineer",
  "Data Engineer",
  "DevOps Engineer",
  "Scrum Master",
  "Product Owner",
  "Human Resources",
];

function run() {
  console.log("We are currently running app called arrays");

  const aleksandra = createPerson("Aleksandra", "Vukasinovic");

  const array = [
    createPerson("Nikolina", "Novakovic"),
    createPerson("David", "Mandic"),
    createPerson("Petar", "Vukmanovic"),
    createPerson("Mirko", "Vasic"),
    createPerson("Stefan", "Dankuc"),
    createPerson("Dusan", "Gajic"),
    createPerson("Milan", "Tesic"),
    createPerson("Igor", "Popovic"),
    createPerson("Tijana", "Golovic"),
    aleksandra,
  ];

  console.log(jobTitles.random());

  // console.log(
  //   "banalan primer",
  //   array.reduce((acc, covek) => {
  //     acc.push(covek.fullName.toUpperCase());
  //     return acc;
  //   }, [])
  // );

  // console.log("array", array);

  // console.log(
  //   "reduced po zaposlenju: ",
  //   array.reduce((acc, user) => {
  //     if (!acc[user.title]) {
  //       acc[user.title] = [];
  //     }
  //     acc[user.title].push(user);
  //     return acc;
  //   }, {})
  // );

  // console.log(
  //   "po alfabeti",
  //   array.reduce((acc, user) => {
      
  //     if (!acc[user.firstName[0]]) {
  //       acc[user.firstName[0]] = [];
  //     }

  //     acc[user.firstName[0]].push(user);
  //     // return acc;

  //     return Object.keys(acc)
  //       .sort()
  //       .reduce((obj, key) => {
  //         obj[key] = acc[key];
  //         return obj;
  //       }, {});
  //   }, {})
  // );

  // console.log("duzina niza", newArray.length);
  // console.log("newArray", newArray);

  // hocu da u svaki od nizova stavim inicijale
  // const inicijali = newArray.map((jedanOdNiza) => {
  //   // const initials = jedanOdNiza.firstName[0] + jedanOdNiza.lastName[0];
  //   const { firstName, lastName } = jedanOdNiza;

  //   return {
  //     ...jedanOdNiza,
  //     initials: firstName[0] + lastName[0],
  //   };
  // });
  // console.log("mapirano da ima inicijale", inicijali);

  // console.log(
  //   "filtrirano",
  //   inicijali.filter((jedanUNizu) => ["AV", "NN"].includes(jedanUNizu.initials))
  // );

  // console.log(
  //   "nadji Davida",
  //   Object.assign(
  //     {},
  //     inicijali.find((nekaVarijabla) => nekaVarijabla.firstName === "David")
  //   )
  // );
}

module.exports = {
  run,
};
