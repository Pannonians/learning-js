const person = (firstNeme, lastName, age, gender) => {
    const fullName = `${firstNeme} ${lastName}`;
    const fullInfo = `${firstNeme} ${lastName} ${age} ${gender}`;

    return{
        firstNeme,
        lastName,
        fullName,
        age,
        gender,
        fullInfo,
    }
}

function run() {
    console.log("This is exercise related to Arrays!!");
    const rajna = person('Rajna', 'Mandic', 34, 'female')

    const array = [
        person('David', 'Mandic', 34, 'male'),
        person('Dusan', 'Mandic', 2, 'male'),
        rajna,
    ];

    console.log(array);
    console.log("Array length: ", array.length);

    //Initials in array
    console.log(
        array.map((onePerson) => {
            const initials = onePerson.firstNeme[0] + onePerson.lastName[0]
            return{
             ...onePerson,
             initials,
            }
        })
    )

    //Filter 
    console.log('Filter', array.filter((oneInArray) => oneInArray.age < 10));

    //Find 
    console.log('Find Dusan', array.find((findDusan) => findDusan.firstNeme === 'Dusan'));
}

module.exports = {
    run,
};