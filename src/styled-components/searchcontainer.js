import styled from 'styled-components'

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

export { SearchContainer }
