import { useState, useContext, useEffect } from 'react'
import { useImmerReducer } from 'use-immer'
import axios from 'axios'
import { playlistContext } from './context'
import { roundToX } from './utils'

import Canvas from './Canvas'
import GUI from './GUI'

const CanvasContainer = () => {
  const {
    playlist: { tracks },
  } = useContext(playlistContext)

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

  useEffect(() => {
    async function getAttributes() {
      await handlePlaylistChange()
    }
    getAttributes()
  }, [tracks])

  const handlePlaylistChange = async () => {
    const trackIds = tracks.map(({ track: { id } }) => id)
    const idsAsStr = trackIds.join(',')
    await fetchAttrs(idsAsStr)
  }

  const fetchAttrs = async (ids) => {
    await axios
      .get('/audio-features', {
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
      const attrKeys = ['danceability', 'energy', 'instrumentalness', 'tempo']
      attrKeys.forEach((key) => {
        const abbreviatedKey =
          key === 'danceability'
            ? 'dnc'
            : key === 'energy'
            ? 'enrg'
            : key === 'instrumentalness'
            ? 'inst'
            : 'tmp'
        if (!attrs[abbreviatedKey]) attrs[abbreviatedKey] = []
        attrs[abbreviatedKey].push(track[key])
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
    <div className="flex h-full">
      <div className="flex-1">
        <Canvas />
      </div>
      <GUI attributes={editableAttributes} change={handleAttrChange} />
    </div>
  )
}
export default CanvasContainer
