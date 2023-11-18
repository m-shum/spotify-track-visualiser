import { GUIContainer } from './styled-components/contents'

const GUI = ({ attributes, change }) => {
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
    <GUIContainer className="gui">
      {Object.entries(attributes).map(([key, val]) => (
        <div key={key} className="gui__row flex flex-col gap">
          <button className="cell square">
            <div className="square__content"></div>
          </button>
          <div className="gui__row__slider-container cell flex-1">
            {/* Slider */}
            <p className="gui__row__val">{val}</p>
            <p className="gui__row__key">{key}</p>
          </div>
        </div>
      ))}
    </GUIContainer>
  )
}
export default GUI
