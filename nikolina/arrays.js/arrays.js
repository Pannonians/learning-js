const lameOldBookGenerator = (firstName, lastName, title, year) => {
    const book = `${firstName} ${lastName} ${title} ${year}`;

    return {
        firstName,
        lastName,
        title,
        year,
        isWritterActive: true

    };
};

function run() {

    console.log ('We are currently running app called arrays');

    const array = [
        lameOldBookGenerator ("aghata", "cristie", "Hercule Poirot", 1920),
        lameOldBookGenerator ("joanne", "rowling", "Harry Potter", 1995),
        lameOldBookGenerator ("eichiro", "oda", "One Piece", 1990),
        lameOldBookGenerator ("john", "tolkin", "Lord of the Rings", 1980)
    ];

    //zelim da ispravim da mi svako prvo slovo imena i prezimena autora bude veliko

    const letterUpperCase = array.map ((fullname) => {
        const {firstName, lastName} = fullname;
        return{
            ...fullname,
            firstCapsLetter: firstName.split (' ').map(rec => rec.charAt(0).toUpperCase() + rec.slice(1)),
            lastNameCapsLetter: lastName.split (' ').map(rec => rec.charAt(0).toUpperCase() + rec.slice(1)),
        };
    
    }); 
    console.log("da prvo slovo bude veliko", letterUpperCase);

    const initials = array.map ((inicijali) => {
        const {firstName, lastName} = inicijali;
        return {
            ...inicijali,
            firstNameInitials: firstName[0] + lastName[0],
        };
    });
    console.log ("hocemo inicijale", initials);

    console.log( "filtrirano", initials.filter((inicijali) => ["eo", "jt"].includes(inicijali.firstNameInitials)));

        console.log(
            "nadji Tolkina",
            Object.assign(
              {},
              initials.find((nestonesto) => nestonesto.firstName === "john")
            )
          );

};


module.exports = {
    run,
};
