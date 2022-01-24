import { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/todoReducer";

export const TodoContext = createContext()

export default function TodoContextProvider(props) {
    
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const initialTodos = localStorage.getItem("todos")
        return initialTodos ? JSON.parse(initialTodos) : []
    })

    useEffect( () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            { props.children }
        </TodoContext.Provider>
    )
}