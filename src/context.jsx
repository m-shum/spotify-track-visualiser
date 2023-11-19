import React, { createContext, useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const playlistContext = createContext()

export const ContextProvider = ({ children, playlist, setPlaylist }) => {
  // const [playlist, setPlaylist] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [updateKey, setUpdateKey] = useState(playlist?.data?.id)
  const handleKeyUpdate = useCallback(() => {
    const newKey = uuidv4()
    setUpdateKey(newKey)
  })
  return (
    <playlistContext.Provider
      value={{
        playlist,
        setPlaylist,
        isSearching,
        setIsSearching,
        updateKey,
        handleKeyUpdate,
      }}
    >
      {children}
    </playlistContext.Provider>
  )
}
