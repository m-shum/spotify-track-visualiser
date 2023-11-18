// import { createContext } from 'react'

// export const playlistContext = createContext(null)

import React, { createContext, useState } from 'react'

export const playlistContext = createContext()

export const ContextProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState(null)
  const [isSearching, setIsSearching] = useState(false)

  return (
    <playlistContext.Provider
      value={{ playlist, setPlaylist, isSearching, setIsSearching }}
    >
      {children}
    </playlistContext.Provider>
  )
}
