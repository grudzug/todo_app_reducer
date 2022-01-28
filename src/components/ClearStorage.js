export default function ClearStorage() {

    function handleClear() {
        localStorage.clear()
        alert("LocalStorage cleared, please refresh")
    }

    return (
        <button 
            onClick={handleClear}
            className="clear-btn" >
                clear localstorage &#10060;
        </button>
    )
}