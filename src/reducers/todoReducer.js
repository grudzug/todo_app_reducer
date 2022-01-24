import { v4 as uuidv4 } from 'uuid'

export function todoReducer(state, action) {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, {
                id: uuidv4(),
                text: action.todo,
                completed: false
            }]
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id)
        case "EDIT_TODO":
            return state.map(todo => {
                if (todo.id === action.id) {
                    todo.text = action.editedText
                }
                return todo
            })
        case "COMPLETE_TODO":
            return state.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = action.completed
                }
                return todo
            })
        default:
            return state
    }
}