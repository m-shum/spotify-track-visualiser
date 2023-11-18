import { useContext } from 'react'
import { playlistContext } from './context'
import PlaylistInfo from './PlaylistInfo'
import Search from './Search'

const PlaylistHeader = () => {
  // const [playlist, setPlaylist] = useState(null)
  const { playlist, setPlaylist, isSearching } = useContext(playlistContext)

  const handlePlaylistChange = (data, tracks) => {
    setPlaylist({ data, tracks })
  }

  return (
    <>
      {playlist && !isSearching ? (
        <PlaylistInfo />
      ) : (
        <Search handlePlaylistChange={handlePlaylistChange} />
      )}
    </>
  )
}

export default PlaylistHeader
