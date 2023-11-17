import React, { useState } from 'react'
import { useImmerReducer } from 'use-immer'
import axios from 'axios'
import Search from './Search'
import Canvas from './Canvas'
import GUI from './GUI'

const CanvasContainer = ({ token }) => {
  const attrChangeReducer = (draft, action) => {
    switch (action.type) {
      case 'update': {
        draft[action.key] = action.value
        break
      }
      case 'reset': {
        return averageAttributes
      }
      case 'set': {
        return averageAttributes
      }
      default: {
        throw Error('Unknown action: ' + action.type)
      }
    }
  }

  const [averageAttributes, setAverageAttributes] = useState({})
  const [editableAttributes, dispatch] = useImmerReducer(
    attrChangeReducer,
    averageAttributes,
  )

  const handlePlaylistChange = (playlistItems) => {
    const idsAsStr = playlistItems.join(',')
    fetchAttrs(idsAsStr)
  }

  const fetchAttrs = (ids) => {
    axios
      .get('https://api.spotify.com/v1/audio-features', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        params: {
          ids,
        },
      })
      .then((res) => {
        const { data } = res
        getAverageAttrs(data.audio_features)
      })
  }

  const parseAttrs = (data) => {
    return data.reduce((attrs, track) => {
      const attrKeys = [
        'acousticness',
        'danceability',
        'energy',
        'instrumentalness',
        'tempo',
      ]
      attrKeys.forEach((key) => {
        if (!attrs[key]) attrs[key] = []
        attrs[key].push(track[key])
      })
      return attrs
    }, {})
  }

  const getAverageAttrs = (data) => {
    const attributesPerTrack = parseAttrs(data)
    const averageAttributes = {}
    Object.entries(attributesPerTrack).forEach(([key, value]) => {
      averageAttributes[key] =
        value.reduce((sum, val) => {
          sum += val
          return sum
        }, 0) / value.length
    })
    console.log(averageAttributes)
    setAverageAttributes(averageAttributes)
    dispatch({
      type: 'set',
    })
  }

  const handleAttrChange = (attrKey, attrVal) => {
    dispatch({
      type: 'update',
      key: attrKey,
      value: attrVal,
    })
  }

  return (
    <div>
      <div>Album art</div>
      <GUI
        attributes={editableAttributes}
        handleAttrChange={handleAttrChange}
      />
      <Canvas attributes={editableAttributes} />
      <Search token={token} handlePlaylistChange={handlePlaylistChange} />
    </div>
  )
}
export default CanvasContainer
