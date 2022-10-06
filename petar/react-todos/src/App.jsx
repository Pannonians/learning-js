import { useEffect, useState } from "react";
import "./App.css";

const Todo = ({ text }) => {
  return (
    <div
      className="qweqwe"
      style={{ fontSize: 14, marginTop: 12, color: "red" }}
    >
      {text}
    </div>
  );
};

const InputForNewTodo = ({ setNewTodo }) => {
  return (
    <input
      placeholder="Create new todo"
      onChange={(e) => {
        setNewTodo(e.target.value);
      }}
    />
  );
};

const Button = ({ setClickSaveTodo }) => {
  return <button onClick={() => setClickSaveTodo(true)}>Save Todo!</button>;
};

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const [clickSaveTodo, setClickSaveTodo] = useState(false);

  useEffect(() => {
    if (clickSaveTodo) {
      setAllTodos([...allTodos, newTodo]);
      setClickSaveTodo(false);
    }
  }, [allTodos, clickSaveTodo, newTodo]);

  return (
    <div className="App">
      <header className="App-header">
        <div>Todos</div>
        <InputForNewTodo setNewTodo={setNewTodo} />
        <Button setClickSaveTodo={setClickSaveTodo} />

        {allTodos.map((todo) => (
          <Todo key={todo} text={todo} />
        ))}
      </header>
    </div>
  );
}

export default App;
