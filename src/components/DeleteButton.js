import deleteIcon from "../icons/trashcan_icon.svg"
import { TodoContext } from "../contexts/TodoContext"
import { useContext } from "react"


export default function DeleteButton( {todo} ) {

    const { dispatch } = useContext(TodoContext)

    return (
        <button 
            className="icon" 
            onClick={() => dispatch({type: "DELETE_TODO", id: todo.id})}>
            <img src={deleteIcon} className="icon" alt="delete icon" 
        />
        </button>
    )
}