Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};

const contestants = (firstName, lastName, position) => {
    const fullinfo = `${firstName} ${lastName} ${position}`;
  
    return {
      firstName,
      lastName,
      position,
      fullinfo,
      activated: true,
      pointsContest: points.random(),
    };
  };
const points = [
    54,
    78,
    21,
    84,
    19,
    62,
    51,
];


function run () {
    console.log('we are practicing reduce');

    //takmicari

const arrayContest = [
    contestants("Nikolina", "Novakovic", "1st"),
    contestants("Slobodan", "Novakovic", "2nd"),
    contestants("Olivera", "Djurasevic", "3rd"),
    contestants("Gabriela", "Sajko", "4th"),
    contestants("Nikola", "Pejic", "5th"),
    contestants("Miroslav", "Pavlovic", "6th"),
    contestants("Davor", "Djurasevic", "7th"),
];

console.log ('ovo su nasi takmicari', arrayContest);

//da ime bude upperCase

console.log (arrayContest.reduce((acc, takmicar) => {
    acc.push (takmicar.firstName.toUpperCase());
    return acc;
}, [])
);

//pokazi koje mesto su takmicari osvojili

const contestPosition = arrayContest.reduce ((acc, takmicar) => {
    return {...acc, [takmicar.firstName]: takmicar.position}
}, {});

console.log('koju poziciju su takmicari ostvarili', contestPosition);

//pokazi koji takmicar je osvojio najvise bodova

const maxPoints = arrayContest.reduce ((acc, takmicar) => {
    if (acc === null || takmicar.pointsContest > acc) {
        return takmicar.pointsContest
    }
    return acc
}, null);

console.log ('maksimalan broj osvojenih poena', maxPoints);

//prikazi mi takmicare po alfabetskim slovima

console.log (arrayContest.reduce ((acc, takmicar) => {
    if (!acc[takmicar.firstName[0]]) {
        acc[takmicar.firstName[0]] = [];
    }
    acc[takmicar.firstName[0]].push(takmicar);
    return acc;
}))

}

module.exports = {
    run,
  };