import { TodoContext } from '../contexts/TodoContext';
import { useContext, useState } from 'react';

export default function TodoText({ todo }) {

    const { dispatch } = useContext(TodoContext)
    const [checked, setChecked] = useState(todo.completed)

    function handleChacked(e) {
        setChecked(e.target.checked)
        dispatch({type:"COMPLETE_TODO", completed: e.target.checked, id: todo.id})
    }
    
    return (
        <div style={todo.completed ? {textDecoration: "line-through"} : {}} >
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={e => handleChacked(e)} 
            />
            {todo.text}
        </div>
    )
}