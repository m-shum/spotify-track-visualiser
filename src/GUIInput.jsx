import { useState } from 'react'
import { SliderInput } from './styled-components/guistyles'

const GuiInput = ({ name, val, setAttribute }) => {
  const parsedVal = val < 1 ? val * 100 : val
  const maxVal = name === 'tmp' ? val + 100 : 100
  const [sliderVal, setSliderVal] = useState(parsedVal)

  const handleChange = (e) => {
    const { value } = e.target
    setSliderVal(value)
    setAttribute(name, value)
  }
  return (
    <SliderInput>
      <input
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
