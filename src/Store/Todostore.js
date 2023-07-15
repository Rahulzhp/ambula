import { useContext, useState, createContext, useEffect } from "react";

export const todoContext = createContext(null);

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const handleAddTodo = (title, description) => {
        const newTodo = {
            id: Math.random().toString(),
            title,
            description,
            completed: false,
            createdAt: new Date(),
        };

        setTodos((prevTodos) => {
            const newTodos = [newTodo, ...prevTodos];
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        });
    };

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            const newTodos = prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        });
    };

    const handleDelete = (id) => {
        setTodos((prevTodos) => {
            const newTodos = prevTodos.filter((todo) => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        });
    };

    return (
        <todoContext.Provider value={{ todos, handleAddTodo, toggleTodo, handleDelete }}>
            {children}
        </todoContext.Provider>
    );
};

export function useTodos() {
    const todosContextValue = useContext(todoContext);
    if (!todosContextValue) {
        throw new Error("useTodos used outside provider");
    }
    return todosContextValue;
}
