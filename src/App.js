import TodoList from './components/TodoList';
import ClearStorage from './components/ClearStorage';
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext';

import YourName from './components/YourName';

function App() {

    const { user } = useContext(UserContext)

    // getting the initial username from localstorage, if any.  
/*     const [yourName, setYourName] = useState( () => {
        const savedName = localStorage.getItem("yourname")
        return savedName ? JSON.parse(savedName) : ""
    }) */

    return (
        <div>
            <h1>Todo app</h1>
            {!user ?
                <YourName /> 
                :   <TodoList yourName={user.name} />}
            <ClearStorage />
        </div>
    );
}

export default App;
