export default function FilterButton( {name, setFilter, isActive} ) {
    return (
      <button
        type="button"
        style={isActive ? {background: "#00bfa5"} : {background: "#fff"}}
        onClick={() => setFilter(name)}
      >
        <span>{name} feladat</span>
      </button>
    );
  }