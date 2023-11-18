import { useEffect, useState, useContext } from 'react'
import { playlistContext } from './context'
import { PlaylistInfoWrapper, UserImg } from './styled-components/playlistinfo'
import axios from 'axios'

const PlaylistInfo = () => {
  const { playlist } = useContext(playlistContext)

  const [user, setUser] = useState(null)
  useEffect(() => {
    async function fetchUser() {
      const { data } = await axios.get(`/users/${playlist.data.owner.id}`)
      setUser(data)
    }
    fetchUser()
  }, [playlist])

  return (
    <div className="cell h-full flex align--center">
      <PlaylistInfoWrapper>
        <h1>{playlist.data.name}</h1>
        <div className="flex align--center">
          <div className="user-img">
            {user ? <UserImg $url={user.images[0].url} /> : <></>}
          </div>
          <h2>{playlist.data.owner.display_name}</h2>
        </div>
      </PlaylistInfoWrapper>
    </div>
  )
}

export default PlaylistInfo
