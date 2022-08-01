function TodoGenerator(title) {
    this.title = title;
    this.completed = false;
};
  
TodoGenerator.prototype.switchYesOrNo = function () {
    this.completed = !this.completed;
};

function run() {
    
    var toDoList = [];

    toDoList.push(new TodoGenerator('srediti kuhinju'));
    toDoList.push(new TodoGenerator('srediti kupatilo'));
    toDoList.push(new TodoGenerator('usisati sobu'));
    toDoList.push(new TodoGenerator('obaviti kupovinu'));
    toDoList.push(new TodoGenerator('zaliti cvece'));
       
    console.log ("ToDo lista svih otvorenih zadataka:",toDoList);

    toDoList = toDoList.map((toDo, index) => {  
        if (index === 2 || index === 3) {
            toDo.switchYesOrNo();
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