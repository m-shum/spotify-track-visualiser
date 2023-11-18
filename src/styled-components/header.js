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
  background-position: center;
`

const SearchContainer = styled.form`
  .search__input {
    input {
      font-size: var(--font-size-lg);
      font-weight: 200;
      height: fit-content;
      margin: var(--spacing-xxs-horizontal);
    }
  }
  .search__submit {
    display: block;
    transition: all 0.15s ease;
    &:hover {
      background-color: var(--red);
      color: white;
    }
  }
`

const SignoutButton = styled.button`
  transition: background-color 0.15s ease;
  &:hover {
    background-color: var(--grey-light);
  }
`

export { PlaylistInfoWrapper, UserImg, SearchContainer, SignoutButton }
