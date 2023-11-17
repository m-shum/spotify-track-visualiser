import React, { useState } from 'react'
import axios from 'axios'
import { SearchContainer } from './styled-components/searchcontainer'
import { gsap } from 'gsap'

const Search = ({ token, handlePlaylistChange }) => {
  const [playlistUrl, setPlaylistUrl] = useState('')

  const toggleGlow = (val) => {
    if (val) {
      gsap.to('html', {
        '--pseudo-opacity-search': 1,
        duration: 0.15,
        ease: 'power2.in',
      })
    } else {
      gsap.to('html', {
        '--pseudo-opacity-search': 0,
        duration: 0.15,
        ease: 'power2.in',
      })
    }
  }

  const getPlaylistIdFromURL = async () => {
    return new Promise((resolve) => {
      if (!playlistUrl) setPlaylistUrl(document.getElementById('input').value)
      const regex = /playlist\/([^?]+)/gm
      let m
      let playlistId = null
      while ((m = regex.exec(playlistUrl)) !== null) {
        if (m.index === regex.lastIndex) {
          regex.lastIndex++
        }
        m.forEach((match, groupIndex) => {
          if (groupIndex === 1) playlistId = match
        })
      }
      resolve(playlistId)
    })
  }
  const fetchPlaylistItems = async (e) => {
    e.preventDefault()
    const playlistId = await getPlaylistIdFromURL()
    if (!playlistId) return
    console.log(playlistId)
    axios
      .get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        params: {
          fields: 'items(added_by.id,track(id))',
          limit: 20,
        },
      })
      .then((res) => {
        const {
          data: { items },
        } = res
        console.log(items)
        const trackIds = items.map(({ track }) => track.id)
        handlePlaylistChange(trackIds)
      })
  }
  return (
    <SearchContainer className="flex gap search">
      <div className="search__input flex flex-col justify--center row-narrow flex-1 cell cell--glow">
        <input
          onFocus={() => {
            toggleGlow(true)
          }}
          onBlur={() => {
            toggleGlow(false)
          }}
          type="text"
          id="input"
          placeholder="Enter playlist URL"
          onChange={(e) => {
            setPlaylistUrl(e.target.value)
          }}
        />
      </div>
      <button
        type="submit"
        form="searchform"
        onClick={fetchPlaylistItems}
        className="cell square col-narrow search__submit"
      >
        <div className="square__content flex justify--center align--center allcaps">
          <span>Search</span>
        </div>
      </button>
      {/* Search
      <form action="" id="searchform">
        <input
          type="text"
          id="input"
          onChange={(e) => {
            setPlaylistUrl(e.target.value)
          }}
        />
        <button type="submit" form="searchform" onClick={fetchPlaylistItems}>
          Search
        </button>
      </form> */}
    </SearchContainer>
  )
}

export default Search
