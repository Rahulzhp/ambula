import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "../Styles/Todostyle.css";
import { useTodos } from "../Store/Todostore";
import { useLocation } from "react-router-dom";

const Todos = () => {
    const { todos, toggleTodo, handleDelete } = useTodos();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const todoFilter = searchParams.get("todos");
    console.log(todos);
    let filteredTodos = todos;

    if (todoFilter === "active") {
        filteredTodos = filteredTodos.filter((el) => !el.completed);
    } else if (todoFilter === "complete") {
        filteredTodos = filteredTodos.filter((el) => el.completed);
    }

    return (
        <div className="todos">
            <div>
                {filteredTodos.map((el) => (
                    <div className="todoItem" key={el.id.toString()}>
                        <div>
                            <input
                                type="checkbox"
                                id={`el-${el.id}`}
                                checked={el.completed}
                                onChange={() => toggleTodo(el.id)}
                            ></input>
                        </div>
                        <div id="title">
                            <div>
                                <h1>
                                    Title : <span>{el.title}</span>{" "}
                                </h1>
                            </div>
                            <div>
                                <p>
                                    Description: <span>{el.description}</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            {el.completed && (
                                <div onClick={() => handleDelete(el.id)}>
                                    <AiFillDelete />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todos;
