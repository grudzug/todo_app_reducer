import { TodoContext } from '../contexts/TodoContext'
import { useContext, useState } from 'react'

export default function AddTodo() {
    
    const { dispatch } = useContext(TodoContext)
    const [todo, setTodo] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: "ADD_TODO", todo})
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit}>
                <div className="add-todo">
                    <input 
                        type="text" 
                        value={todo} 
                        onChange={e => setTodo(e.target.value)}
                        placeholder="Add todo"
                        required 
                    />
                    <button type="submit" className="add-btn">
                        +
                    </button>
                </div>
            </form>
    )
}