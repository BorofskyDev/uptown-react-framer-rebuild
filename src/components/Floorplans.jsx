import { FloorplanCard } from './utils'
import divider from '../assets/divider.webp'
import data from '../assets/floorplanData'


export default function Floorplans() {
  const cards = data.map((item) => {
    return <FloorplanCard key={item.id} {...item} />
  })

  return (
    <section className='Floorplans section-container' id='floorplans'>
      <img src={divider} alt='' className='divider' />
      <div className='title'>Floorplans</div>
      <div className='Floorplans__card-container'>
        {cards}
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
