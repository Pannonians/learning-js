function run() {
  function Todo(title) {
    this.title = title;
    this.completed = false;
  }

  Todo.prototype.toggleTodo = function () {
    this.completed = !this.completed;
  };

  const todos = [
    new Todo('Buy groceries'),
    new Todo('Walk the dog'),
    new Todo('Cook dinner'),
    new Todo('Clean the room'),
    new Todo('Water the plants'),
    ];

  function printTodos(todoArray) {
    todoArray.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo.title} - Completed: ${todo.completed}`);
    });
  }

  console.log('All todos:');
  printTodos(todos);

  todos[2].toggleTodo();
  todos[3].toggleTodo();

  console.log('\nAfter toggling 3rd and 4th todos:');
  printTodos(todos);

  const completedTodos = todos.filter((todo) => todo.completed);
  console.log('\nCompleted todos:');
  printTodos(completedTodos);

  const notCompletedTodos = todos.filter((todo) => !todo.completed);
  console.log('\nNot completed todos:');
  printTodos(notCompletedTodos);
}

module.exports = {
  run,
};
