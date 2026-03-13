const moods = ["all", "sleep", "relax", "focus"]

function FilterBar({ filter, setFilter }) {
  return (
    <div className="filters">
      {moods.map((mood) => (
        <button
          key={mood}
          className={filter === mood ? "active" : ""}
          onClick={() => setFilter(mood)}
        >
          {mood}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
