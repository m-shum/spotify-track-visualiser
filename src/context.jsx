// import { createContext } from 'react'

// export const playlistContext = createContext(null)

import React, { createContext, useState } from 'react'

export const playlistContext = createContext()

export const ContextProvider = ({ children, playlist, setPlaylist }) => {
  // const [playlist, setPlaylist] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [updateKey, setUpdateKey] = useState(playlist?.data?.id)

  return (
    <playlistContext.Provider
      value={{
        playlist,
        setPlaylist,
        isSearching,
        setIsSearching,
        updateKey,
        setUpdateKey,
      }}
    >
      {children}
    </playlistContext.Provider>
  )
}
