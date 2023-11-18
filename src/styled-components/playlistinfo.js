import styled from 'styled-components'

const PlaylistInfoWrapper = styled.div`
  margin-left: var(--spacing-xxs-horizontal);

  h1 {
    font-size: var(--font-size-lg);
    font-weight: 300;
    margin-bottom: var(--spacing-xxxs-vertical);
  }
  h2 {
    text-transform: lowercase;
    font-size: calc(var(--font-size-base) * 1.2);
  }
`

const UserImg = styled.div`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  margin-right: var(--spacing-xxxxs-horizontal);
  background-image: ${(props) => `url(${props.$url})`};
  background-size: cover;
`
export { PlaylistInfoWrapper, UserImg }
