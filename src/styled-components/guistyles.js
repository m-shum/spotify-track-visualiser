import styled from 'styled-components'

const GUIContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--gap);
  height: 100%;

  button {
    transition:
      background-color 0.15s ease,
      color 0.15s ease;

    &.selected {
      background-color: var(--red);
      color: var(--white);
    }
    &:hover {
      background-color: var(--red);
      color: var(--white);
    }
  }

  .gui__col {
    width: 9vh;
  }

  .gui__slider-container {
    padding: var(--spacing-xxs-vertical) var(--spacing-xxxs-horizontal);
  }

  .gui__row__val {
    font-size: var(--font-size-xl);
  }
`

const SliderInput = styled.div`
  margin-bottom: var(--spacing-xxs-vertical);
  margin-top: var(--spacing-md-vertical);
  flex: 1;
  position: relative;
  input {
    z-index: 1;
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: left center;
    left: 0;
    bottom: 0;
    -webkit-appearance: none;
    width: 40vh;
    height: 15px;
    background: transparent;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 3px;
      height: 25px;
      background: var(--red);
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 3px;
      height: 25px;
      background: var(--red);
      cursor: pointer;
    }
  }
  .svg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 15px;
    height: 40vh;
    transform: translateX(-50%);
    /* width: 40vh; */
    /* height: 100%; */
    /* transform: rotate(-90deg); */
    /* transform-origin: left center; */
  }
`

export { GUIContainer, SliderInput }
