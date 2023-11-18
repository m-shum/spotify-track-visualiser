import { GUIContainer } from './styled-components/contents'

const GUI = ({ attributes, handleAttrChange }) => {
  const handleSubmit = (event, key) => {
    event.preventDefault()
    const val = document.getElementById(`edit${key}`).value
    handleAttrChange(key, val)
  }

  return (
    // <div>
    //   {Object.entries(attributes).map(([key, value]) => (
    //     <>
    //       <p key={key + value}>
    //         {key}: {value}
    //       </p>
    //       <form action="" key={`form${key}`}>
    //         <label htmlFor="edit">Edit value</label>
    //         <input type="text" name="edit" id={`edit${key}`} />
    //         <button onClick={(e) => handleSubmit(e, key)}>Submit</button>
    //       </form>
    //     </>
    //   ))}
    // </div>
    <GUIContainer>
      <div>
        <button className="cell"></button>
        <div className="cell"></div>
      </div>
      <div>
        <button className="cell"></button>
        <div className="cell"></div>
      </div>
      <div>
        <button className="cell"></button>
        <div className="cell"></div>
      </div>
      <div>
        <button className="cell"></button>
        <div className="cell"></div>
      </div>
    </GUIContainer>
  )
}
export default GUI
