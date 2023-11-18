import styled from 'styled-components'

const FooterContainer = styled.footer`
  padding: var(--spacing-xxs-vertical) 14.6vh var(--spacing-xxs-vertical)
    var(--spacing-xxs-horizontal);

  .footer__links {
    gap: var(--spacing-xxs-horizontal);
  }

  .arrow {
    font-weight: 100;
    /* font-size: var(--font-size-lg); */
  }
`

export { FooterContainer }
