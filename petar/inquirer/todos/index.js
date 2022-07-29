const fs = require('fs')
const inquirer = require('inquirer')

function Todo(title, done = false) {
  this.title = title
  this.done = done
}

function run() {
  console.log('Welcome to todo app!')

  if (!fs.existsSync('./todos/todos.json')) {
    fs.writeFileSync('./todos/todos.json', JSON.stringify([]))
  }

  let todos = JSON.parse(fs.readFileSync('./todos/todos.json'))

  const questions = [
    {
      type: 'list',
      name: 'start',
      message: 'What do you wanna do?',
      choices: ['List all todos', 'Create new todo', 'Remove todo'],
    },
    {
      type: 'list',
      name: 'allTodos',
      message: 'These are all todos. Select one to toggle todo status.',
      choices: [
        '~~~Create new todo~~~',
        ...todos.map((todo) => `[${todo.done ? 'x' : ''}] ${todo.title}`),
      ],
      when(answers) {
        return answers.start === 'List all todos'
      },
    },
    {
      type: 'input',
      name: 'newTodo',
      message: 'New todo title?',
      default: '',
      when(answers) {
        return (
          answers.allTodos === '~~~Create new todo~~~' ||
          answers.start === 'Create new todo'
        )
      },
    },
    {
      type: 'list',
      name: 'deleteTodo',
      message: 'Which todo do you want to delete?',
      choices: todos.map((todo) => todo.title),
      when(answers) {
        return answers.start === 'Remove todo'
      },
    },
  ]

  inquirer.prompt(questions).then((answers) => {
    if (answers.newTodo) {
      todos.push(new Todo(answers.newTodo))
    }
    console.log('answers', answers)

    if (answers.allTodos && answers.allTodos !== '~~~Create new todo~~~') {
      todos = todos.map((todo) => {
        if (answers.allTodos.includes(todo.title)) {
          todo.done = !todo.done
          return todo
        }
        return todo
      })
    }
    if (answers.deleteTodo) {
      todos = todos.filter((todo) => todo.title !== answers.deleteTodo)
    }

    fs.writeFileSync('./todos/todos.json', JSON.stringify(todos))

    console.log('Current list of todos:')
    console.log(
      todos.map((todo) => `[${todo.done ? 'x' : ''}] ${todo.title}`).join('\n'),
    )
    // console.log(JSON.stringify(answers, null, '  '))
  })
}

module.exports = { run }
