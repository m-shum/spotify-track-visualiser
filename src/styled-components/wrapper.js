import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: var(--gap);
  height: 100%;

  .col-narrow {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
`
export { Wrapper }
