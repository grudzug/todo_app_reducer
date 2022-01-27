import { useRef, useContext } from 'react'
import { UserContext } from '../contexts/UserContext';

export default function YourName() {

    const nameInput = useRef("")
    const { dispatch } = useContext(UserContext)

    function saveYourName() {
        dispatch({ type: "SET_USER", user: nameInput.current.value })
    }

    return (
        <>        
            <div className="your-name">
                <p>Nevem:</p>
                <form onSubmit={saveYourName}>
                    <input type="text" ref={nameInput} required placeholder="Írd ide a neved"/>
                    <button type="submit">Mentés</button>
                </form>
            </div>
        </>
    )
}