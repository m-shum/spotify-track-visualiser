import { useState, useEffect, useContext } from 'react'
import { playlistContext } from './context'

import { SliderInput } from './styled-components/guistyles'

const GuiInput = ({ name, val, setAttribute }) => {
  const { playlist } = useContext(playlistContext)
  const [sliderVal, setSliderVal] = useState(0)
  const [maxVal, setMaxVal] = useState(0)

  useEffect(() => {
    console.log('use effect')
    const sliderVal = val < 1 ? val * 100 : val
    setSliderVal(sliderVal)
    setMaxVal(name === 'tmp' ? sliderVal + 100 : 100)
  }, [playlist])

  const handleChange = (e) => {
    const { value } = e.target
    setSliderVal(value)
    setAttribute(name, value)
  }
  return (
    <SliderInput>
      <input
        orient="vertical"
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
