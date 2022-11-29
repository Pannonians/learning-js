import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useMemo, useState } from "react";

function CompletedTodos() {
    const [showModal, setShowModal] = useState('')
    const close = () => setShowModal(false);
    const open = () => setShowModal(true);

    const todos = useMemo(() => {
        if (showModal) {
            const savedTodos = localStorage.getItem("todos")
            if (savedTodos) {
                return JSON.parse(savedTodos);
            } else {
                return [];
            }
        }
        return []
    }, [showModal]);

    return (
        <div className="center">
            <button className="allListButton allListButton:hover" title="List of Complited tasks"
                type="button"
                onClick={open}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    class="bi bi-filter-square"
                    viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <Dialog isOpen={showModal} onDismiss={close}>
                <div className="row">
                    <div className="col-sm-12 right">
                        <button type="button"
                            onClick={close}
                            className="closeButton">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-square " viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <div className="row center">
                        <div className="col-sm-12 center">
                            <h4>Completed todos</h4>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-sm-3 paddingInitial"><p>Category</p></div>
                            <div className="col-sm-9 paddingInitial"><p>Activity</p></div>
                        </div>
                        <hr></hr>
                        <div className="row todos">
                            {todos.filter((item) => item.completed).map((todo) => (
                                <div className="row">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p>{todo.category}</p>
                                        </div>
                                        <div className="col-sm-9" >
                                            <p>{todo.activity}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
export default CompletedTodos;