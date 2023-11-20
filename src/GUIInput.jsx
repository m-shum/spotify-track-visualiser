import { useState, useEffect, useContext } from 'react'
import { playlistContext } from './context'

import { SliderInput } from './styled-components/guistyles'

const GuiInput = ({ name, val, setAttribute, setGlow }) => {
  const { updateKey } = useContext(playlistContext)
  const [sliderVal, setSliderVal] = useState(0)
  const [maxVal, setMaxVal] = useState(0)

  useEffect(() => {
    const sliderVal = val < 1 ? val * 100 : val
    setSliderVal(sliderVal)
    setMaxVal(name === 'tmp' ? sliderVal + 100 : 100)
  }, [updateKey])

  const handleChange = (e) => {
    const { value } = e.target
    setSliderVal(value)
    setAttribute(name, value)
  }
  return (
    <SliderInput>
      <div className="svg">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 16 100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="8"
            y1="0"
            x2="8"
            y2="100%"
            stroke="#4F5255"
            strokeWidth="15"
            strokeDasharray="0.3 5"
          ></line>
        </svg>
      </div>
      <input
        onClick={(e) => {
          e.target.focus()
        }}
        onFocus={() => {
          setGlow(name, 1)
        }}
        onBlur={() => {
          setGlow(name, 0)
        }}
        type="range"
        min="0"
        max={maxVal}
        value={sliderVal}
        onChange={handleChange}
      />
    </SliderInput>
  )
}

export default GuiInput
