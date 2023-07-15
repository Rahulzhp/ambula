import { Link, useLocation } from "react-router-dom";
import "../Styles/Todostyle.css";

const TodoNav = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const todoFilter = searchParams.get("todos");

    return (
        <div className="Todonavbar">
            <div>
                <h1>Task Management Application</h1>
            </div>
            <nav>
                <Link to="/" className={todoFilter === null ? "active" : ""}>
                    To Do
                </Link>
                <Link
                    to="/?todos=active"
                    className={todoFilter === "active" ? "active" : ""}
                >
                    In Progress
                </Link>
                <Link
                    to="/?todos=complete"
                    className={todoFilter === "complete" ? "active" : ""}
                >
                    Completed
                </Link>
            </nav>
        </div>
    );
};

export default TodoNav;
