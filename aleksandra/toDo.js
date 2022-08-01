function SingleTodo(title) {
    this.title = title;
    this.completed = false;
};
  
SingleTodo.prototype.singleTodoSwitch = function () {
    this.completed = !this.completed;
};

function run() {
    
    var toDoList = [];

    toDoList.push(new SingleTodo('srediti kuhinju'));
    toDoList.push(new SingleTodo('srediti kupatilo'));
    toDoList.push(new SingleTodo('usisati sobu'));
    toDoList.push(new SingleTodo('obaviti kupovinu'));
    toDoList.push(new SingleTodo('zaliti cvece'));
       
    console.log ("ToDo lista svih otvorenih zadataka:",toDoList);

    toDoList = toDoList.map((toDo, index) => {  
        if (index === 2 || index === 3) {
            toDo.singleTodoSwitch();
            return toDo;
        }
        return toDo;
    });  

    console.log ("ToDo lista sa nekim ispunjenim zadacima:",toDoList);

    console.log ("ToDo lista samo ispunjenih zadataka:",toDoList.filter(todo => todo.completed === true));

    console.log ("ToDo lista samo NEispunjenih zadataka:",toDoList.filter(todo => todo.completed === false));
    
};

module.exports = {
    run,
};