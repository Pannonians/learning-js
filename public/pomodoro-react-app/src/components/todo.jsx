import { useState, useEffect } from "react";

function Todo() {
    const [todo, setTodo] = useState({
        category: "",
        activity: ""
    })

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos")
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({})


    const handleEditClick = (todo) => {
        setIsEditing(true);
        setCurrentTodo({ ...todo, });
    }

    const handleEditInputChange = (e) => {
        setCurrentTodo({
            ...currentTodo,
            [e.target.name]: e.target.value
        });
        console.log(currentTodo);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (todo.category !== "" && todo.activity !== "") {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    category: todo.category,
                    activity: todo.activity.trim()
                }
            ]);
            setTodo({
                activity: "",
                category: "",
            });
        }
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        handleUpdateTodo(currentTodo.id, currentTodo);
    }

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
            [e.target.name]: e.target.value
        });
    }

    const handleAddTodo = () => {
        const newItems = [...todos, { ...todo }];
        localStorage.setItem("todos", JSON.stringify(newItems))
    }

    const handleDeleteTodo = (id) => {
        const removeItem = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(removeItem);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <hr></hr>
            {isEditing ? (
                <div className="row">
                    <div className="center"><h3>Edit todo</h3></div>
                </div>) : (
                <div className="row">
                    <div className="center"><h3>Add todo</h3></div>
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
                                    onChange={(handleEditInputChange)}
                                    required>
                                    <option value=""></option>
                                    <option value="Work">Work</option>
                                    <option value="Personal">Personal</option>
                                </select>
                            </div>
                            <div className="col-sm-9">
                                <input className="heighinput heighinput:focus"
                                    type='text'
                                    id='editAactivity'
                                    name="activity"
                                    value={currentTodo.activity}
                                    placeholder="Add activity descripton"
                                    size="80"
                                    required
                                    onChange={handleEditInputChange}
                                />
                            </div>
                            <div className="col-sm-1 center">
                                <button className="addTodoButton addTodoButton:hover"
                                    onClick={() => handleAddTodo()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                                        <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>) : (
                <form onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="row">
                            <div className="col-sm-2">
                                <select
                                    className="dropdown dropdown:hover"
                                    id="category"
                                    name="category"
                                    value={todo.category}
                                    onChange={(handleChange)}
                                    required
                                    //Default value is empty string 
                                    defaultValue={""}>
                                    <option value=""></option>
                                    <option value="Work">Work</option>
                                    <option value="Personal">Personal</option>
                                </select>
                            </div>
                            <div className="col-sm-9">
                                <input className="heighinput heighinput:focus"
                                    type='text'
                                    id='activity'
                                    name="activity"
                                    value={todo.activity}
                                    placeholder="Add activity descripton"
                                    size="80"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-1 center">
                                <button className="addTodoButton addTodoButton:hover"
                                    onClick={() => handleAddTodo()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )
            }
            <hr></hr>
            {todos.map((todo) => (
                <div className="row">
                    <div className="row">
                        <div className="col-sm-2">
                            <p key={todo.id}>{todo.category}</p>
                        </div>
                        <div className="col-sm-9" >
                            <p>{todo.activity}</p>
                        </div>
                        <div className="col-sm-1 center">
                            <button className="EditTodoButton EditTodoButton:hover"
                                onClick={() => handleEditClick(todo)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg></button>
                            <button className="RemovetodoButton RemovetodoButton:hover"
                                onClick={() => handleDeleteTodo(todo.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Todo;