import { FloorplanCard, FloorplanModal } from './utils'
import divider from '../assets/divider.webp'
import data from '../assets/floorplanData'
import { useState } from 'react'


export default function Floorplans() {
  const [floorplanModal, setFloorplanModal] = useState(false);
  const cards = data.map((item) => {
    return <FloorplanCard key={item.id} {...item} openModal={openModal} />
  })

  function openModal() {
    console.log(cards.id)
    setFloorplanModal(!floorplanModal)
  }

  return (
    <section className='Floorplans section-container' id='floorplans'>
      <img src={divider} alt='' className='divider'/>
      <div className='title'>Floorplans</div>
      <div className='Floorplans__card-container'>
        {cards}
        <FloorplanModal
          action={openModal}
          toggle={floorplanModal}
        />
      </div>
      <p className='Floorplans__tag'>
        Availability of our apartment homes can change from day to day, please{' '}
        <a href='#' className='Floorplans__card--link'>
          contact us
        </a>{' '}
        to check on current availability.
      </p>
    </section>
  )
}
