import styled from 'styled-components'

const SearchContainer = styled.form`
  .search__input {
    input {
      height: fit-content;
      margin: var(--spacing-xxs-horizontal);
    }
  }
  .search__submit {
    display: block;
  }
`

export { SearchContainer }
