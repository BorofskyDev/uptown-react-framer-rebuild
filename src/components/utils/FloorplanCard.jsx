import { useState } from 'react'
import { GiExpand, GiBed, GiBathtub, GiVideoCamera } from 'react-icons/gi'
import { BsCurrencyDollar } from 'react-icons/bs'
import FloorplanModal from './FloorplanModal'

function FloorplanCard(props) {
  const { imageUrl, title, size, bedrooms, bathrooms, rent, tourUrl } = props
  const [floorplanModal, setfloorplanModal] = useState(false)

  function openModal() {
    console.log(props.id)
    setfloorplanModal(!floorplanModal)
  }

  return (
    <div className='Floorplans__card'>
      <img
        src={imageUrl}
        alt={title}
        onClick={openModal}
        className='Floorplans__card--img'
      />
      <FloorplanModal
        props={props}
        toggle={floorplanModal}
        action={openModal}
      />
      <h3 className='Floorplans__card--title'>{title}</h3>
      <p className='Floorplans__card--card-content'>
        <GiExpand />
        {size} SQ.FT
      </p>
      <p className='Floorplans__card--card-content'>
        <GiBed />
        {bedrooms} Bedroom
      </p>
      <p className='Floorplans__card--card-content'>
        <GiBathtub />
        {bathrooms} Bathroom
      </p>
      <p className='Floorplans__card--card-content'>
        <BsCurrencyDollar />
        {rent}
      </p>
      <p className='Floorplans__card--card-content'>
        <GiVideoCamera />
        <a href={tourUrl} className='Floorplans__card--link'>
          Virtual Tours
        </a>
      </p>
    </div>
  )
}

export default FloorplanCard
