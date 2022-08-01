function run() {
    console.log("This is array reduce exercise");
    

    //Reduce strings
    const message = ["David ", "Mandic ", "is ", "JavaScript ", "Developer !",];
    let sentence = message.reduce((accumulator, value) =>
        accumulator + value);
    
    console.log("Join strings into sentance: ", sentence);

    const words = ["Java Script ", "is ", "very ", "powerful ", "programming ", "language !"];
    let sentance1 = words.reduce((accumulator, value) => 
        accumulator + value);
    console.log("Words into sentenc: ", sentance1);

    //Reduce numbers 
    var numbers = [10, 10, 15, 20, 20, 5, 5, 40, 40, 50];
    let sumNumbers = numbers.reduce((accumulator, value) => 
        accumulator + value)

    console.log("Sum: ", sumNumbers);

    let subNumbers = numbers.reduce((accumulator, value) => 
        accumulator - value);
    
    console.log("Sub: ", subNumbers);

    //Remove duplicates 
    let removeDuplicates = numbers.reduce((accumulator, value) => {
         if (accumulator.indexOf(value) === -1){
            accumulator.push(value);
         }
         return accumulator;
    },[]);
    console.log("RemovedDuplicates ", removeDuplicates);

    //Grouping people by a property 
    const people = [
        {name: 'David', age: 34},
        {nema: 'Mirko', age: 37},
        {name: 'Petar', age: 34},
        {name: 'Nikolina', age: 27},
        {name: 'Sandra', age: 27},
        {name: 'Aleksandra', age: 28},
    ];
    
    console.log (
    people.reduce((accumulator, peopleItem) => {

        if (!accumulator[peopleItem.age]) {
          accumulator[peopleItem.age] = [];
        }
        accumulator[peopleItem.age].push(peopleItem);
        return accumulator;
      }, {}));

    console.log (
    people.reduce((accumulator, peopleItem) => {
    
        if (!accumulator[peopleItem.name]) {
           accumulator[peopleItem.name] = [];
        }
           accumulator[peopleItem.name].push(peopleItem);
           return accumulator;
        }, {}));

    }

module.exports = {
    run,
};