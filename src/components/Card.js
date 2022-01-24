import "../styles/Card.css"
import { useState, useContext } from "react"
import { useSpring, animated } from 'react-spring'
import EditButton from "./EditButton"
import DeleteButton from "./DeleteButton"
import TodoText from "./TodoText"
import { TodoContext } from "../contexts/TodoContext"

export default function Card({ todo }) {

    const { dispatch } = useContext(TodoContext)

    // if editing, show the input field, otherwise not
    const [isEditing, setIsEditing] = useState(false)

    const animation = useSpring({
        from: { rotateX: 90 },
        to: { rotateX: 0 },
    })

    return (
        <animated.li style={animation}>
            {isEditing ? 
                <input type="text"  className="edit" onChange={e => dispatch({type: "EDIT_TODO", editedText: e.target.value, id: todo.id})}/> 
                :  <TodoText todo={todo}/>
            }
            <EditButton isEditing={isEditing} setIsEditing={setIsEditing}/>
            <DeleteButton todo={todo} />
        </animated.li>
    )
}