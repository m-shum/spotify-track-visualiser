import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import CanvasContainer from './CanvasContainer'
import Login from './Login'
import './styles.scss'

function App() {
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
        <Login />
      ) : (
        <div>
          <CanvasContainer token={token} />
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
