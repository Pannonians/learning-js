const createPerson = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
  
    return {
      firstName,
      lastName,
      fullName,
      activated: true,
    };
  };
  
  function run() {
    console.log("We are currently running app called arrays");
  
    const aleksandra = createPerson("Aleksandra", "Vukasinovic");
  
    const array = [
      createPerson("Nikolina", "Novakovic"),
      createPerson("David", "Mandic"),
      aleksandra,
    ];
  
    const newArray = [...array, createPerson("Petar", "Vukmanovic")];
  
    console.log("duzina niza", newArray.length);
    console.log("newArray", newArray);
  
    const inicijali = newArray.map((jedanOdNiza) => {
      const { firstName, lastName } = jedanOdNiza;
  
      return {
        ...jedanOdNiza,
        initials: firstName[0] + lastName[0],
      };
    });
    console.log("mapirano da ima inicijale", inicijali);
  
    console.log(
      "filtrirano",
      inicijali.filter((jedanUNizu) => ["AV", "NN"].includes(jedanUNizu.initials))
    );
  
    console.log(
      "nadji Davida",
      Object.assign(
        {},
        inicijali.find((nekaVarijabla) => nekaVarijabla.firstName === "David")
      )
    );
  }
  
  module.exports = {
    run,
  };