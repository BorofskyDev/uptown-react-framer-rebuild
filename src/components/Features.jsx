import { GiHouse } from 'react-icons/gi'
import { MdApartment } from 'react-icons/md'
import divider from '../assets/divider.webp'

export default function Features() {
  return (
    <section className='section-container' id='features'>
      <img src={divider} alt='divider' className='divider' />
      <h2 className='title'>features & amenities</h2>
      <div className='Features'>
        <div className='Features__container'>
          <h3 className='Features__title'>Apartment Features</h3>
          <ul className='Features__apt-features'>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              2018 Built Luxury Apartments
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Central Heat & Air Conditioning
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Hardwood Floors
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Luxury Cabinetry
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Granite Countertops
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Stainless Steel Appliances
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Oven/Range
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Microwave
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Refrigerator
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Dishwasher
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Double Basin Sink
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Garbage Disposal
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Washer & Dryer
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Premium Lighting
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Ceiling Fans
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Cox Ultra-Fast Internet Ready
            </li>
            <li className='Features__apt-features--feature'>
              <GiHouse />
              Private Balcony
            </li>
          </ul>
        </div>
        <div className='Features__container'>
          <h3 className='Features__title'>Community Amenities</h3>
          <ul className='Features__apt-features'>
            <li className='Features__apt-features--feature'>
              <MdApartment />
              College Hill Location
            </li>
            <li className='Features__apt-features--feature'>
              <MdApartment />
              Secure Keypad Access
            </li>
            <li className='Features__apt-features--feature'>
              <MdApartment />
              Rooftop Sunset Terrace
            </li>
            <li className='Features__apt-features--feature'>
              <MdApartment />
              Elevator In Building
            </li>
            <li className='Features__apt-features--feature'>
              <MdApartment />
              Fitness Center
            </li>
            <li className='Features__apt-features--feature'>
              <MdApartment />
              Secured, Gated Parking
            </li>
            <li className='Features__apt-features--feature'>
              <MdApartment />
              Carports & Garages Available
            </li>
            <li className='Features__apt-features--feature'>
              <MdApartment />
              Onsite Management & Maintenance
            </li>
            <li className='Features__apt-features--feature'>
              <MdApartment />
              24/7 Emergency Maintenance
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
