import TodoList from './components/TodoList';
import ClearStorage from './components/ClearStorage';
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext';

import YourName from './components/YourName';

function App() {

    const { user } = useContext(UserContext)

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
