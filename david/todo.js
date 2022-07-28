function todo(title) {
    this.title = title;
    this.complited = false;
}

todo.prototype.toggle = function() {
    this.complited = !this.complited;
}

function run(){
    console.log("This is 'todoList' app related to JavaScript course!");

    let todoList = [];
    todoList.push(new todo("GitHub"));
    todoList.push(new todo("Node"));
    todoList.push(new todo("JavaScript"));
    todoList.push(new todo("React js"));
    todoList.push(new todo("Linux(Ubuntu)"));
   
    console.log(todoList);

    todolist = todoList.map((todoListItem, index) => {
        if (index === 2 || index === 3) {
            todoListItem.toggle();
            return todoListItem;
        }
        else {
            return todoListItem;
        }
    })

    console.log("Switch 3rd and 4th todo to be completed", todoList);

    console.log("Print only todos that are completed", todoList.filter((item) => item.complited));
    console.log("Print only todos that are not completed", todoList.filter((item) => !item.complited));
}

module.exports = {
    run,
};