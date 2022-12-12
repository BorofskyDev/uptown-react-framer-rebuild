import { GrClose } from 'react-icons/gr'

function FloorplanModal(props) {
  const { imageUrl, toggle, action } = props
  const modalState = toggle

  return (
    <div className={`Modal-container ${modalState ? 'active' : ''}`}>
      <div className="Modal-container__modal">
        <img src={imageUrl} alt="" className="Modal-container__modal--image" />

      </div>
    </div>
  )
}

export default FloorplanModal