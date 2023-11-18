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
  input {
    height: 100%;
    appearance: slider-vertical;
  }
`

export { GUIContainer, SliderInput }
