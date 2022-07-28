const createBook = (firstName, lastName, title, year) => {
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
        createBook ("aghata", "cristie", "Hercule Poirot", 1920),
        createBook ("joanne", "rowling", "Harry Potter", 1995),
        createBook ("eichiro", "oda", "One Piece", 1990),
        createBook ("john", "tolkin", "Lord of the Rings", 1980)
    ];

    //zelim da ispravim da mi svako prvo slovo imena i prezimena autora bude veliko

      
     /*  const capitalizeWords = [];
      
      array.forEach (element => {
          firstname = capitalizeWords.push(element.firstName.charAt(0).toUpperCase()+ element.firstName.slice(1).toLowerCase()),
          lastname = capitalizeWords.push(element.lastName.charAt(0).toUpperCase()+ element.lastName.slice(1).toLowerCase());
          });
           */
          
          const capitalizeWords = array.map ((createBook) => {
              return {
                  ...createBook,
                  firstname.charAt(0).toUpperCase()+ firstName.slice(1).toLowerCase(),
              }
          })
          console.log("da prvo slovo bude veliko", capitalizeWords);
          
          /* && createBook.lastName.charAt(0).toUpperCase()+ createBook.lastName.slice(1).toLowerCase(); */
       
          

      

    /* const letterUpperCase = array.map ((fullname) => {
        const {firstName, lastName} = fullname;
        return{
            ...fullname,
            firstCapsLetter: firstName.split (' ').map(rec => rec.charAt(0).toUpperCase() + rec.slice(1)),
            lastNameCapsLetter: lastName.split (' ').map(rec => rec.charAt(0).toUpperCase() + rec.slice(1)),
        };
    
    });  */


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
