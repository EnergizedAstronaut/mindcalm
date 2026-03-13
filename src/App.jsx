import { useState } from "react"
import SearchBar from "./components/SearchBar"
import FilterBar from "./components/FilterBar"
import MusicGrid from "./components/MusicGrid"
import "./styles.css"

function App() {

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  return (
    <div className="app">

      <h1>MindCalm</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <FilterBar filter={filter} setFilter={setFilter} />

      <MusicGrid search={search} filter={filter} />

    </div>
  )
}

export default App
