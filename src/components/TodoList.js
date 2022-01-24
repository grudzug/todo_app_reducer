import '../styles/TodoList.css'
import Card from './Card'
import AddTodo from './AddTodo';
import FilterButton from './FilterButton';
import { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext';

// setting up filtering logic
const filterMap = {
    Minden: () => true,
    Hátralévő: todo => !todo.completed,
    Elkészült: todo => todo.completed
}
const filterNames = Object.keys(filterMap)

export default function TodoList({  yourName }) {

    const { todos } = useContext(TodoContext)
    const [filter, setFilter] = useState('Minden')

    return (
        <div className="todo-list">
            <h2>Szia {yourName}! &#9996;</h2>
            {filterNames.map(name => (
                <FilterButton
                    key={name}
                    name={name}
                    isActive={name === filter}
                    setFilter={setFilter}
                />
            ))}
            {todos.length > 0 ? <ul>
                {todos.filter(filterMap[filter]).map(todo => (
                    <Card key={todo.id} todo={todo}/>
                ))}
            </ul> : <h2>Add hozzá az első feladatod!</h2>}
            <AddTodo />
        </div>
    )
}