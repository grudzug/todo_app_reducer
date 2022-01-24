import TodoList from './components/TodoList';
import ClearStorage from './components/ClearStorage';
import { useState } from 'react'
import YourName from './components/YourName';

function App() {

    // getting the initial username from localstorage, if any.  
    const [yourName, setYourName] = useState( () => {
        const savedName = localStorage.getItem("yourname")
        return savedName ? JSON.parse(savedName) : ""
    })

    return (
        <div>
            <h1>Todo app</h1>
            {!yourName ?
                <YourName yourName={yourName} setYourName={setYourName} /> 
                :   <TodoList yourName={yourName} />}
            <ClearStorage />
        </div>
    );
}

export default App;
