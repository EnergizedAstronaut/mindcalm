import { tracks } from "../data/tracks"

function MusicGrid({ search, filter }) {

  const filteredTracks = tracks.filter(track => {

    const matchSearch =
      track.title.toLowerCase().includes(search.toLowerCase())

    const matchFilter =
      filter === "all" || track.mood === filter

    return matchSearch && matchFilter
  })

  return (
    <div className="grid">
      {filteredTracks.map(track => (
        <div className="card" key={track.id}>
          <h3>{track.title}</h3>
          <p>{track.artist}</p>

          <audio controls src={track.url}></audio>
        </div>
      ))}
    </div>
  )
}

export default MusicGrid
