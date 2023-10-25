import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Search from './Search'
import './styles.scss'

function App() {
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
  const AUTH_ENDPOINT = import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT
  const RESPONSE_TYPE = import.meta.env.VITE_SPOTIFY_RESPONSE_TYPE

  const [token, setToken] = useState('')

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if (hash && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1]
      window.location.hash = ''
      window.localStorage.setItem('token', token)
    }

    setToken(token)
  }, [])

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  return (
    <div>
      {!token ? (
        <div>
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        </div>
      ) : (
        <div>
          <Search token={token} />
          <button className="logOut" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
