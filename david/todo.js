const Todoslav = require('./helpers').Todo

function run(){
    console.log("This is 'todoList' app related to JavaScript course!");

    let listica = [];
    listica.push(new Todoslav("GitHub"));
    listica.push(new Todoslav("Node"));
    listica.push(new Todoslav("JavaScript"));
    listica.push(new Todoslav("React js"));
    listica.push(new Todoslav("Linux(Ubuntu)"));
   
    console.log(listica);

    todolist = listica.map((todoListItem, index) => {
        if (index === 2 || index === 3) {
            todoListItem.toggle();
            return todoListItem;
        }
        else {
            return todoListItem;
        }
    })

    console.log("Switch 3rd and 4th todo to be completed", listica);

    console.log("Print only todos that are completed", listica.filter((item) => item.complited));
    console.log("Print only todos that are not completed", listica.filter((item) => !item.complited));
}

module.exports = {
    run,
};