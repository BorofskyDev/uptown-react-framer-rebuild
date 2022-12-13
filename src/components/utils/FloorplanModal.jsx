import { GrClose } from 'react-icons/gr'
import flr from '../../assets/apt-imgs/1bdr/1-bedroom-floorplan.webp'

function FloorplanModal(props) {
  const { imageUrl, toggle, action } = props
  const modalState = toggle
  console.log(imageUrl)

  return (
    <div className={`Modal-container ${modalState ? 'active' : ''}`}>
      <div className="Modal-container__modal">
        <img src={imageUrl} alt="" className="Modal-container__modal--image" />

      </div>
    </div>
  )
}

export default FloorplanModal