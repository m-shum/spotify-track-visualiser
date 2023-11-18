import styled from 'styled-components'

const Contents = styled.main`
  margin: var(--gap) 0;
  display: flex;
  gap: var(--gap);
  flex: 1;
`

const GUIContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--gap);
`
export { Contents, GUIContainer }
