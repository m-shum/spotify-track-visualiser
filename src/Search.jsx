import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Search = ({ token }) => {
  const [query, setQuery] = useState('')
  const [track, setTrack] = useState({})

  const getTrackIdFromURL = () => {
    if (!query) setQuery(document.getElementById('input').value)
    const regex = /(\/track\/)(\S+)/gm
    let m
    let trackId = null
    while ((m = regex.exec(query)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        if (groupIndex === 2) trackId = match
      })
    }
    return trackId
  }
  const searchTrack = async () => {
    const trackId = getTrackIdFromURL()
    console.log('track id', trackId)
    if (!trackId) return
    const { data } = await axios.get(
      `https://api.spotify.com/v1/audio-features/${trackId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        params: { market: 'US' },
      },
    )
    setTrack(data)
    console.log('track', track)
  }
  return (
    <div>
      Search
      <form action="" id="searchform">
        <input
          type="text"
          id="input"
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
        <button type="submit" form="searchform" onClick={searchTrack}>
          Search
        </button>
      </form>
    </div>
  )
}

export default Search
