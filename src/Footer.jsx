import { FooterContainer } from './styled-components/footer'

const Footer = () => {
  const currentYear = 2023
  return (
    <FooterContainer className="footer flex w-full h-full align--end">
      <div className="flex w-full justify--space-between allcaps">
        <p>Copyright Mikhail Shumakov {currentYear}</p>
        <div className="footer__links flex">
          <a href="https://www.mshumakov.com/" target="_blank" rel="noreferrer">
            Website <span className="arrow">↗</span>
          </a>
          <a href="https://github.com/m-shum" target="_blank" rel="noreferrer">
            Github <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
