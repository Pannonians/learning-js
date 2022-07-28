//Create an object generator for Todo instances
//Accept a "title" argument
//Always generate a todo with completed: false property

function Todo(title) {
    this.title = title;
    this.completed = false;
}

//Prototype a function to switch todo

Todo.prototype.toogleTodo = function () {
    this.completed = !this.completed;
};

function run () {
    console.log ('radimo prvi pravi domaci');

    //Create 5 todo items in an array

    let toDoList = [];
toDoList.push(new Todo ("uradi domaci zadatak kako treba")),
toDoList.push(new Todo ("procitaj jos jednom sta je reduce")),
toDoList.push(new Todo ("stavi bolonjez u frizider da se ne usmrdi")),
toDoList.push(new Todo ("daj kerovima veceru")),
toDoList.push(new Todo ("usput nahrani i decu"));

//Print todos.

console.log ('jel se vidi ova lista', toDoList);

//Switch 3rd and 4th todo to be completed

todo_list = toDoList.map((Todo, index) => {
    if (index === 2) {
        Todo.toogleTodo ();
        return Todo;

    }
    return Todo;
}); 
todo_list2 = toDoList.map((Todo, index) => {
    if (index === 3) {
        Todo.toogleTodo ();
        return Todo;
    }
    return Todo;
}
)
console.log ('promena da treci i cetvrti todo budu completed', todo_list, todo_list2);

//Print only todos that are completed

console.log ('daj mi samo todo koji su completed', toDoList.filter (Todo => Todo.completed));

//print only todos that are not completed

console.log ('daj mi samo todo koji nisu completed', toDoList.filter (Todo => !Todo.completed));
}

module.exports = {run}