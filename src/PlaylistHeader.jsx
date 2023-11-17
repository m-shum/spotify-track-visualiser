import { useState } from 'react'
import Search from './Search'

const PlaylistHeader = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [playlist, setPlaylist] = useState(null)

  return (
    <>
      {playlist || isSearching ? (
        <div className="cell h-full flex justify--center align--center">
          <h1>Playlist title</h1>
          <div className="flex">
            <div className="user-img"></div>
            <h2>User name</h2>
          </div>
        </div>
      ) : (
        <Search />
      )}
    </>
  )
}

export default PlaylistHeader
