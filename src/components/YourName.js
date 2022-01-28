import { useRef, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function YourName() {

    const nameInput = useRef("")
    const { dispatch } = useContext(UserContext)

    function saveYourName() {
        dispatch({ type: "SET_USER", user: nameInput.current.value })
    }

    return (
        <>        
            <div className="your-name">
                <p>Name:</p>
                <form onSubmit={saveYourName}>
                    <input type="text" ref={nameInput} required placeholder="Your name goes here..."/>
                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    )
}