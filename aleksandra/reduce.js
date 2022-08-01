reduce 
function run() {
    
    brojevi = [1, 2, 2, 3, 4, 5, 6, 1];

    console.log ("Zbir brojeva:", brojevi.reduce((acc, broj) => 
        acc + broj)
    );

    console.log ("Najveci broj u nizu je:",brojevi.reduce((acc, broj) => 
        broj > acc ? broj: acc, brojevi[0])
    );

    console.log ("Najmanji broj u nizu je:",brojevi.reduce((acc, broj) => 
        broj < acc ? broj: acc, brojevi[0])
    );

    console.log ("Ponavljanje brojeva:", brojevi.reduce((acc, broj) => {
        return {...acc, [broj]: (acc[broj] || 0) + 1 }
        }, {})
    )
    
};

module.exports = {
    run,
};