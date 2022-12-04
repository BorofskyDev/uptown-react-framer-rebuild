import divider from '../assets/divider.webp'
import keeper from '../assets/ict-imgs/ict-img1.jpg'
import concert from '../assets/ict-imgs/ict-img4.jpg'
import arena from '../assets/ict-imgs/ict-img5.jpg'

export default function About() {
  return (
    <main>
      <section className='About section-container' id='about'>
        <img src={divider} alt='divider' className='divider' />
        <h2 className='title'>Luxury college hill apartments</h2>
        <p className='About__text font-regular'>
          Located in the heart of Wichita’s popular College Hill neighborhood,
          Uptown Landing offers exclusive luxury apartments within easy reach of{' '}
          <a href='#' className='About__link'>
            Downtown
          </a>
          ,{' '}
          <a href='#' className='About__link'>
            {' '}
            Old Town
          </a>
          , and walking distance from restaurants, shopping, pubs, and grocery
          stores. Whether you choose a 1, 2, or 3 bedroom apartment, each home
          features energy-efficient central heat and air, a stainless steel
          appliance package, luxury cabinetry, granite countertops, hardwood
          floors, premium lighting package, and private balconies. Our building
          includes secure keypad access and gated parking, onsite office,
          fitness center, elevator in the building, and a rooftop sunset terrace
          with expansive views of the{' '}
          <a href='#' className='About__link'>
            City of Wichita
          </a>
        </p>
        <div className='About__image-container'>
          <img
            src={keeper}
            alt='Pedestrian bridge over river at sunset with the Keeper of the Plains sculpture in the background'
            className='About__image-container--image'
          />
          <img
            src={concert}
            alt='People at a small outside concert, behind a bar'
            className='About__image-container--image'
          />
          <img
            src={arena}
            alt='Downtown Wichita with the Intrust Bank Arena in the foreground'
            className='About__image-container--image'
          />
        </div>
      </section>
    </main>
  )
}
