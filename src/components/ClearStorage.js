import "../styles/ClearStorage.css"

export default function ClearStorage() {

    function handleClear() {
        localStorage.clear()
        alert("LocalStorage törölve, kérlek frissíts")
    }

    return (
        <button onClick={handleClear} className="clear-btn" >Localstorage törlése &#10060;</button>
    )
}