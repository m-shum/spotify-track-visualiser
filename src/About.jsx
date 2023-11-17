const About = ({ setShowAbout, showAbout }) => {
  return (
    <div className="h-full flex justify--center align--center">
      <button
        className="allcaps"
        onClick={() => {
          setShowAbout(!showAbout)
        }}
      >
        {showAbout ? 'Close' : 'About'}
      </button>
    </div>
  )
}

export default About
