import { useContext, useEffect, useState } from 'react'
import { playlistContext } from './context'
import { GUIContainer } from './styled-components/guistyles'
import GuiInput from './GUIInput'
import { gsap } from 'gsap'

const GUI = ({ attributes, change, reset }) => {
  const { isSearching, setIsSearching } = useContext(playlistContext)
  const [displayAttrs, setDisplayAttrs] = useState([])

  const isSettingCover = false
  const getNewPlaylist = () => {
    setIsSearching(!isSearching)
  }
  const useCover = () => {}
  const randomiseAttrs = () => {}

  const setGlow = (key, val) => {
    gsap.to(`.gui-${key} .glowbox`, {
      opacity: val,
      duration: 0.15,
      ease: 'power2.in',
    })
  }

  const actions = [
    { name: 'new', method: getNewPlaylist },
    { name: 'reset', method: reset },
    { name: 'rand', method: randomiseAttrs },
    { name: 'use', method: useCover },
  ]

  useEffect(() => {
    const displayAttrs = Object.entries(attributes).map(([key, val]) =>
      val < 1 ? val.toFixed(2) : val.toFixed(),
    )
    setDisplayAttrs(displayAttrs)
  }, [attributes])

  const handleAttrChange = (key, val) => {
    const newVal = key !== 'tmp' ? val / 100 : +val
    change(key, newVal)
  }
  return (
    <GUIContainer className="gui">
      {Object.entries(attributes).map(([key, val], index) => (
        <div key={key} className="gui__col flex flex-col gap">
          <button
            onClick={(e) => {
              e.preventDefault()
              actions[index].method()
            }}
            className={`cell square has-glow button-${actions[index].name} ${
              (isSearching && index === 0) || (isSettingCover && index === 3)
                ? 'selected'
                : ''
            }`}
          >
            <div className="glowbox"></div>
            <div className="square__content allcaps flex align--center justify--center">
              {actions[index].name}
            </div>
          </button>
          <div
            className={`gui__slider-container has-glow cell flex-1 flex flex-col justify--end align--center gui-${key}`}
          >
            <div className="glowbox"></div>
            <GuiInput
              key={key}
              name={key}
              val={val}
              setAttribute={handleAttrChange}
              setGlow={setGlow}
            />
            <p className="gui__row__val">{displayAttrs[index]}</p>
            <p className="gui__row__key allcaps">{key}</p>
          </div>
        </div>
      ))}
    </GUIContainer>
  )
}
export default GUI
