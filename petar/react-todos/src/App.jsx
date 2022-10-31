import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const ALL_TODOS = "all_todos";

const TODO_TEMPLATE = {
  content: "",
  done: false,
};

const Todo = ({ text, handleDelete, markTodo, done }) => {
  return (
    <div>
      <button
        type="button"
        className="qweqwe"
        style={{ fontSize: 14, marginTop: 12, color: "red", cursor: "pointer" }}
        onClick={() => {
          handleDelete(text);
        }}
      >
        {text}
      </button>
      <button
        type="button"
        onClick={() => {
          markTodo(text);
        }}
      >
        Mark {done ? "not done" : "mark done"}
      </button>
    </div>
  );
};

const InputForNewTodo = ({ name, setNewTodo, clickSaveTodo, passedRef }) => {
  const [currentInput, setCurrentInput] = useState("");

  const [milliSeconds, setMilliSeconds] = useState(0);
  const [ticking, setTicking] = useState(false);

  useEffect(() => {
    if (currentInput !== "") {
      setTicking(true);
    }
  }, [currentInput]);

  const interval = useRef();

  useEffect(() => {
    if (ticking) {
      interval.current = setInterval(() => {
        setMilliSeconds((ms) => ms + 1);
      }, 1);
      return () => clearInterval(interval.current);
    } else {
      interval.current && clearInterval(interval.current);
    }
  }, [ticking]);

  useEffect(() => {
    if (clickSaveTodo) {
      setCurrentInput("");
      setTicking(false);
    }
  }, [clickSaveTodo]);

  return (
    <>
      <div>Milliseconds: {milliSeconds}</div>
      <input
        ref={passedRef}
        value={currentInput}
        placeholder="Create new todo"
        onChange={(e) => {
          setCurrentInput(e.target.value);
          setNewTodo(`[${name}] ${e.target.value}`);
        }}
      />
    </>
  );
};

const Button = ({ setClickSaveTodo }) => {
  return <button onClick={() => setClickSaveTodo(true)}>Save Todo!</button>;
};

const Greeting = ({ setName }) => {
  return (
    <div>
      <h3>Greetings!</h3>
      <input
        type="text"
        onKeyDown={(e) => {
          if (["Enter", "NumpadEnter"].includes(e.code)) {
            setName(e.target.value);
          }
        }}
        placeholder="What's your name?"
      />
      <p>hit enter to confirm</p>
    </div>
  );
};

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [allTodos, setAllTodos] = useState(null);

  const [clickSaveTodo, setClickSaveTodo] = useState(false);

  const [name, setName] = useState(null);

  const inputField = useRef();

  useEffect(() => {
    if (clickSaveTodo) {
      setAllTodos([
        ...allTodos,
        {
          ...TODO_TEMPLATE,
          content: newTodo,
        },
      ]);
      setClickSaveTodo(false);
      inputField.current.focus();
    }
  }, [allTodos, clickSaveTodo, newTodo]);

  useEffect(() => {
    const allTodosFromLocalStorage = localStorage.getItem(ALL_TODOS);
    if (!allTodosFromLocalStorage) {
      setAllTodos([]);
    } else {
      setAllTodos(JSON.parse(allTodosFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (allTodos) {
      localStorage.setItem(ALL_TODOS, JSON.stringify(allTodos));
    }
  }, [allTodos]);

  const filteredDoneTodos = useMemo(
    () => allTodos ? allTodos.filter((todo) => todo.done) : [],
    [allTodos]
  );

  // ABOVE MUST BE HOOKS

  const handleDelete = (todo) => {
    setAllTodos(allTodos.filter((t) => t.content !== todo));
  };

  const markTodo = (todo) => {
    setAllTodos(
      allTodos.map((t) => {
        if (t.content === todo) {
          t.done = !t.done;
          return t;
        }
        return t;
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {name ? (
          <>
            <div>Todos</div>
            <InputForNewTodo
              passedRef={inputField}
              clickSaveTodo={clickSaveTodo}
              name={name}
              setNewTodo={setNewTodo}
            />
            <Button setClickSaveTodo={setClickSaveTodo} />

            {allTodos.map((todo) => (
              <Todo
                markTodo={markTodo}
                handleDelete={handleDelete}
                key={todo.content}
                text={todo.content}
                done={todo.done}
              />
            ))}

            <button type="button" onClick={() => setName(null)}>
              Logout
            </button>

            <div>
              <h4>All done todos:</h4>
              {filteredDoneTodos.map((todo) => (
                <p>{todo.content}</p>
              ))}
            </div>
          </>
        ) : (
          <Greeting setName={setName} />
        )}
      </header>
    </div>
  );
}

export default App;
