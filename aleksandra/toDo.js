function ToDo(title) {
    this.title = title;
    this.completed = false;
};
  
ToDo.prototype.toggleToDo = function () {
    this.completed = !this.completed;
};

function run() {
    
    var toDoList = [];

    toDoList.push(new ToDo('srediti kuhinju'));
    toDoList.push(new ToDo('srediti kupatilo'));
    toDoList.push(new ToDo('usisati sobu'));
    toDoList.push(new ToDo('obaviti kupovinu'));
    toDoList.push(new ToDo('zaliti cvece'));
       
    console.log ("ToDo lista svih otvorenih zadataka:",toDoList);

    toDoList = toDoList.map((toDo, index) => {  
        if (index === 2 || index === 3) {
            toDo.toggleToDo();
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