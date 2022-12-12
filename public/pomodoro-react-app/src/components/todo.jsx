import { useState, useEffect } from "react";
import CompletedTodos from "./completedTodos";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Todo() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [todo, setTodo] = useState({
    category: "",
    activity: "",
    completed: false,
    dateTime: "",
    pomodoros: "",
  });
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({
      ...currentTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todo.category !== "" && todo.activity !== "" && todo.pomodoros > 0) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          category: todo.category,
          activity: todo.activity.trim(),
          completed: todo.completed,
          dateTime: new Date().toLocaleDateString(),
          pomodoros: todo.pomodoros,
        },
      ]);
      setTodo({
        id: "",
        activity: "",
        category: "",
        completed: false,
        dateTime: "",
        pomodoros: "",
      });
    } else {
      alert("Please add number of pomodoros!");
    }
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTodo = () => {
    const newItems = [...todos, { ...todo }];
    localStorage.setItem("todos", JSON.stringify(newItems));
  };

  const handleDeleteTodo = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleCompletedTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
  };

  const id = todos.length == 0 ? 1 : todos.find((item) => !item.completed).id;
  return (
    <div>
      <hr></hr>
      {isEditing ? (
        <div className="row ceter">
          <div className="center">
            <h3>Edit todo</h3>
          </div>
        </div>
      ) : (
        <div className="row center">
          <div className="center">
            <h3>Add todo</h3>
          </div>
        </div>
      )}
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <div className="row">
            <div className="row">
              <div className="col-sm-2">
                <select
                  className="dropdown dropdown:hover"
                  id="editCategory"
                  name="category"
                  value={currentTodo.category}
                  onChange={handleEditInputChange}
                  required
                >
                  <option disabled={true} value="">
                    Category
                  </option>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>
              <div className="col-sm-8">
                <input
                  className="activityInput activityInput:focus"
                  type="text"
                  id="editAactivity"
                  name="activity"
                  value={currentTodo.activity}
                  placeholder="Add activity descripton"
                  size="80"
                  required
                  onChange={handleEditInputChange}
                />
              </div>
              <div className="col-sm-1">
                <input
                  className="pomodorosInput pomodorosInput:focus"
                  type="tel"
                  id="editPomodoros"
                  name="pomodoros"
                  value={currentTodo.pomodoros.replace(/\D/g, "")}
                  required
                  onChange={handleEditInputChange}
                />
              </div>
              <div className="col-sm-2 center">
                <button
                  className="addTodoButton addTodoButton:hover"
                  onClick={() => handleAddTodo()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    class="bi bi-save"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                  </svg>
                </button>
                <CompletedTodos></CompletedTodos>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="row">
              <div className="col-sm-2">
                <select
                  className="dropdown dropdown:hover"
                  id="category"
                  name="category"
                  value={todo.category}
                  onChange={handleChange}
                  required
                  defaultValue={""}
                >
                  <option disabled={true} value="">
                    Category
                  </option>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>
              <div className="col-sm-8">
                <input
                  className="activityInput activityInput:focus"
                  type="text"
                  id="activity"
                  name="activity"
                  value={todo.activity}
                  placeholder="Add activity descripton"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-1">
                <input
                  className="pomodorosInput pomodorosInput:focus"
                  type="tel"
                  id="pomodoros"
                  name="pomodoros"
                  value={todo.pomodoros.replace(/\D/g, "")}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-1 center">
                <button
                  className="addTodoButton addTodoButton:hover"
                  title="Create"
                  onClick={() => handleAddTodo()}
                  type={"submit"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    class="bi bi-plus-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </button>
                <CompletedTodos></CompletedTodos>
              </div>
            </div>
          </div>
        </form>
      )}
      <div className="row numberOfTodos">
        <div className="col">
          <hr></hr>
        </div>
        <div className="col center">
          <DragDropContext onDropEnd={(result) => console.log(result)}>
            <Droppable droppableId={id.toString()}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver ? "white" : "white",
                      padding: 5,
                      width: 1000,
                      minHeight: 15,
                    }}
                  >
                    TODO LIST - {todos.filter((item) => !item.completed).length}
                    {todos
                      ? todos
                          .filter((item) => !item.completed)
                          .map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id.toString()}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 3,
                                        margin: "0 0 8px 00",
                                        minHeight: "15px",
                                        backgroundColor: snapshot.isDragging
                                          ? "rgb(184, 72, 68)"
                                          : "white",
                                        color: "black",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {" "}
                                      <div className="row">
                                        <div className="col-sm-2">
                                          <p className="alignParahraphActivityCategory">
                                            {item.category}
                                          </p>
                                        </div>
                                        <div className="col activityInput">
                                          <p className="alignParahraphActivityCategory">
                                            {item.activity}
                                          </p>
                                        </div>
                                        <div className="col-sm-1">
                                          <p className="alignParahraphPomodoros">
                                            {item.pomodoros}
                                          </p>
                                        </div>
                                        <div className="col-sm-1 center">
                                          <button
                                            className="editTodoButton editTodoButton:hover"
                                            title="Edit"
                                            onClick={() =>
                                              handleEditClick(item)
                                            }
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="18"
                                              height="18"
                                              fill="currentColor"
                                              class="bi bi-pencil-square"
                                              viewBox="0 0 16 16"
                                            >
                                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                              <path
                                                fill-rule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                              />
                                            </svg>
                                          </button>
                                          <button
                                            className="finishedTodoButton finishedTodoButton:hover"
                                            title="Complete"
                                            onClick={() =>
                                              handleCompletedTodo(item)
                                            }
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="18"
                                              height="18"
                                              fill="currentColor"
                                              class="bi bi-check-square"
                                              viewBox="0 0 16 16"
                                            >
                                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                                            </svg>
                                          </button>
                                          <button
                                            className="removeTodoButton RemoveTodoButton:hover"
                                            title="Delete"
                                            onClick={() =>
                                              handleDeleteTodo(item.id)
                                            }
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="18"
                                              height="18"
                                              fill="currentColor"
                                              class="bi bi-x-square"
                                              viewBox="0 0 16 16"
                                            >
                                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })
                      : ""}{" "}
                  </div>
                );
              }}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default Todo;
