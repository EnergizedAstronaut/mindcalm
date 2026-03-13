function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search"
      placeholder="Search music..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar
