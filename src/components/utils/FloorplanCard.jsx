import { useState } from 'react'
import { GiExpand, GiBed, GiBathtub, GiVideoCamera } from 'react-icons/gi'
import { BsCurrencyDollar } from 'react-icons/bs'

function FloorplanCard(props) {
  const {
    openModal,
    imageUrl,
    title,
    size,
    bedrooms,
    bathrooms,
    rent,
    tourUrl,
  } = props

  return (
    <div className='Floorplans__card'>
      <img
        src={imageUrl}
        alt={title}
        onClick={openModal}
        className='Floorplans__card--img'
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
