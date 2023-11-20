import React, { useState, useContext, useEffect } from 'react'
import { playlistContext } from './context'
import axios from 'axios'
import { SearchContainer } from './styled-components/header'
import { gsap } from 'gsap'

const Search = ({ handlePlaylistChange }) => {
  const [playlistUrl, setPlaylistUrl] = useState('')
  const { setIsSearching, isSearching } = useContext(playlistContext)

  const toggleGlow = (val) => {
    gsap.to(`.search__input .glowbox`, {
      opacity: val,
      duration: 0.15,
      ease: 'power2.in',
    })
  }

  useEffect(() => {
    toggleGlow(1)
  }, [isSearching])

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

    const playlist = await axios.get(`/playlists/${playlistId}`, {})
    const tracks = await axios.get(`/playlists/${playlistId}/tracks`, {
      params: {
        fields: 'items(added_by.id,track(id))',
        limit: 20,
      },
    })

    setIsSearching(false)
    handlePlaylistChange(playlist.data, tracks.data.items)
  }
  return (
    <SearchContainer className="flex gap search">
      <div className="search__input flex flex-col justify--center row-narrow flex-1 cell has-glow">
        <div className="glowbox"></div>
        <input
          onFocus={() => {
            toggleGlow(1)
          }}
          onBlur={() => {
            toggleGlow(0)
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
    </SearchContainer>
  )
}

export default Search
