import { useEffect, useState } from 'react'
import './App.css'

const Todo = ({ text }) => {
  return (
    <div
      className="qweqwe"
      style={{ fontSize: 14, marginTop: 12, color: 'red' }}
    >
      {text}
    </div>
  )
}

const InputForNewTodo = ({ name, setNewTodo }) => {
  return (
    <input
      placeholder="Create new todo"
      onChange={(e) => {
        setNewTodo(`[${name}] ${e.target.value}`)
      }}
    />
  )
}

const Button = ({ setClickSaveTodo }) => {
  return <button onClick={() => setClickSaveTodo(true)}>Save Todo!</button>
}

const Greeting = ({ setName }) => {
  return (
    <div>
      <h3>Greetings!</h3>
      <input type="text" onKeyDown={(e) => {
        if (["Enter", "NumpadEnter"].includes(e.code)) {
          setName(e.target.value)
        }
      }} placeholder="What's your name?" />
      <p>hit enter to confirm</p>
    </div>
  )
}

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [allTodos, setAllTodos] = useState([])

  const [clickSaveTodo, setClickSaveTodo] = useState(false)

  const [name, setName] = useState(null)

  useEffect(() => {
    if (clickSaveTodo) {
      setAllTodos([...allTodos, newTodo])
      setClickSaveTodo(false)
    }
  }, [allTodos, clickSaveTodo, newTodo])

  return (
    <div className="App">
      <header className="App-header">
        {name ? (
          <>
            <div>Todos</div>
            <InputForNewTodo name={name} setNewTodo={setNewTodo} />
            <Button setClickSaveTodo={setClickSaveTodo} />

            {allTodos.map((todo) => (
              <Todo key={todo} text={todo} />
            ))}

            <button type='button' onClick={() => setName(null)}>Logout</button>
          </>
        ) : (
          <Greeting setName={setName} />
        )}
      </header>
    </div>
  )
}

export default App
