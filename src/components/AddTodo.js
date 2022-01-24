import { TodoContext } from '../contexts/TodoContext';
import { useContext, useState } from 'react';

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
                <div className="input-wrapper">
                    <input 
                        type="text" 
                        className="new-todo" 
                        value={todo} 
                        onChange={e => setTodo(e.target.value)}
                        placeholder="Feladat hozzáadása"
                        required 
                    />
                    <button type="submit" className="add">+</button>
                </div>
            </form>
    )
}