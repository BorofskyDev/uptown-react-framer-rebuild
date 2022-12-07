import { GiExpand, GiBed, GiBathtub, GiVideoCamera } from 'react-icons/gi'
import { BsCurrencyDollar } from 'react-icons/bs'
import divider from '../assets/divider.webp'
import bdr1 from '../assets/apt-imgs/1bdr/1-bedroom-floorplan.webp'
import bdr2 from '../assets/apt-imgs/2bdr/2-bedroom-floorplan.webp'
import bdr3 from '../assets/apt-imgs/3bdr/3-bedroom-floorplan.webp'

export default function Floorplans() {
  return (
    <section className='Floorplans section-container' id='floorplans'>
      <img src={divider} alt='' className='divider' />
      <div className='title'>Floorplans</div>
      <div className='Floorplans__card-container'>
        <div className='Floorplans__card'>
          <img
            src={bdr1}
            alt='One bedroom floorplan'
            className='Floorplans__card--img'
          />
          <h3 className='Floorplans__card--title'>1 Bedroom</h3>
          <p className='Floorplans__card--card-content'>
            <GiExpand />
            734 - 807 SQ.FT
          </p>
          <p className='Floorplans__card--card-content'>
            <GiBed />1 Bedroom
          </p>
          <p className='Floorplans__card--card-content'>
            <GiBathtub />1 Bathroom
          </p>
          <p className='Floorplans__card--card-content'>
            <BsCurrencyDollar />
            1,065 - 1,175
          </p>
          <p className='Floorplans__card--card-content'>
            <GiVideoCamera />
            <a href='#' className='Floorplans__card--link'>
              Virtual Tours
            </a>
          </p>
        </div>
        <div className='Floorplans__card'>
          <img
            src={bdr2}
            alt='Two bedroom floorplan'
            className='Floorplans__card--img'
          />
          <h3 className='Floorplans__card--title'>2 Bedroom</h3>
          <p className='Floorplans__card--card-content'>
            <GiExpand />
            999 - 1,077 SQ.FT
          </p>
          <p className='Floorplans__card--card-content'>
            <GiBed />2 Bedroom
          </p>
          <p className='Floorplans__card--card-content'>
            <GiBathtub />1 - 2 Bathrooms
          </p>
          <p className='Floorplans__card--card-content'>
            <BsCurrencyDollar />
            1,285 - 1,510
          </p>
          <p className='Floorplans__card--card-content'>
            <GiVideoCamera />
            <a href='#' className='Floorplans__card--link'>
              Virtual Tours
            </a>
          </p>
        </div>
        <div className='Floorplans__card'>
          <img
            src={bdr3}
            alt='Three bedroom floorplan'
            className='Floorplans__card--img'
          />
          <h3 className='Floorplans__card--title'>3 Bedroom</h3>
          <p className='Floorplans__card--card-content'>
            <GiExpand />
            1,259 - 1,381 SQ.FT
          </p>
          <p className='Floorplans__card--card-content'>
            <GiBed />3 Bedroom
          </p>
          <p className='Floorplans__card--card-content'>
            <GiBathtub />2 Bathroom
          </p>
          <p className='Floorplans__card--card-content'>
            <BsCurrencyDollar />
            1,850 - 1,965
          </p>
          <p className='Floorplans__card--card-content'>
            <GiVideoCamera />
            <a href='#' className='Floorplans__card--link'>
              Virtual Tours
            </a>
          </p>
        </div>
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
