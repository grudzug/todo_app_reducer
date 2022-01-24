import { useRef } from 'react'
import '../styles/YourName.css'

export default function YourName({ setYourName }) {

    const nameInput = useRef("")

    function saveYourName() {
        localStorage.setItem("yourname", JSON.stringify(nameInput.current.value))
        setYourName(nameInput.current.value)
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