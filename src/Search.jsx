import React, { useState } from 'react'
import axios from 'axios'
const Search = ({ token, handleTrackChange }) => {
  const [trackUrl, setTrackUrl] = useState('')

  const getTrackIdFromURL = async () => {
    return new Promise((resolve) => {
      if (!trackUrl) setTrackUrl(document.getElementById('input').value)
      const regex = /(\/track\/)(\S+)/gm
      let m
      let trackId = null
      while ((m = regex.exec(trackUrl)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
          if (groupIndex === 2) trackId = match
        })
      }
      resolve(trackId)
    })
  }
  const fetchTrack = async () => {
    const trackId = await getTrackIdFromURL()
    if (!trackId) return
    axios
      .get(`https://api.spotify.com/v1/audio-features/${trackId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        params: { market: 'US' },
      })
      .then((res) => {
        const { data } = res
        handleTrackChange(data)
      })
      .catch((err) => {
        console.log('Error fetching track', err.response?.data)
      })
  }
  return (
    <div>
      Search
      <form action="" id="searchform">
        <input
          type="text"
          id="input"
          onChange={(e) => {
            setTrackUrl(e.target.value)
          }}
        />
        <button type="submit" form="searchform" onClick={fetchTrack}>
          Search
        </button>
      </form>
    </div>
  )
}

export default Search
