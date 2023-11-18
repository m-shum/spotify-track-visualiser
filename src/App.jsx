import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
// import CanvasContainer from './CanvasContainer'
import { Wrapper } from './styled-components/wrapper'
import { Contents } from './styled-components/contents'

import { ContextProvider } from './context'

import Login from './Login'
import Logout from './Logout'
import About from './About'
import Footer from './Footer'
import PlaylistHeader from './PlaylistHeader'
import './css/styles.scss'

import axios from 'axios'

axios.defaults.baseURL = 'https://api.spotify.com/v1/'

function App() {
  const [token, setToken] = useState('')
  const [showAbout, setShowAbout] = useState(false)

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
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    setToken(token)
  }, [token, setToken])

  window.onbeforeunload = function () {
    localStorage.clear()
  }

  return (
    <Wrapper>
      <ContextProvider>
        <div className="col-narrow gap">
          <div className="cell square">
            <div className="square__content"></div>
          </div>
          <div className="cell flex-1">v</div>
        </div>
        <div className="col-main flex flex-col flex-1 h-full">
          <nav className="main-nav flex gap">
            <div className="flex-1">
              {token ? <PlaylistHeader /> : <Login />}
            </div>
            <div className="cell square col-narrow">
              <div className="square__content">
                {token ? (
                  <Logout setToken={setToken} />
                ) : (
                  <About setShowAbout={setShowAbout} showAbout={showAbout} />
                )}
              </div>
            </div>
          </nav>
          <Contents>
            {/* {showAbout ? <About /> : token ? <Visualiser /> : <Placeholder />} */}
            <div className="flex-1"></div>
            <div className="cell h-full col-narrow"></div>
          </Contents>
          <div className="row-narrow cell">
            <Footer />
          </div>
        </div>
        {/* {!token ? (
            <Login />
          ) : (
            <div>
              <CanvasContainer token={token} />
              <button className="logOut" onClick={logout}>
                Logout
              </button>
            </div>
          )} */}
      </ContextProvider>
    </Wrapper>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
