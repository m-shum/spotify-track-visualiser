import React, { useState } from 'react'
import Search from './Search'
import Canvas from './Canvas'
const CanvasContainer = ({ token }) => {
  const [track, setTrack] = useState({})
  const handleTrackChange = (track) => {
    setTrack(track)
  }

  return (
    <div>
      <div>Album art</div>
      <Canvas track={track} />
      <Search token={token} handleTrackChange={handleTrackChange} />
    </div>
  )
}
export default CanvasContainer
