import { GiSittingDog, GiCat } from 'react-icons/gi'
import divider from '../assets/divider.webp'

export default function Fees() {
  return (
    <section className='section-container'>
      <img src={divider} alt='' className='divider' />
      <h2 className='title'>deposits, fees, & policies</h2>
      <p className='Fees'>
        The standard security deposit is $500 for all floorplans with a one-time
        $50 per adult (18+) application fee and one-time nonrefundable $150
        redecoration fee. Garages are available to rent for $90 per month,
        carports for $50 per month, and select secluded and convenient upfront
        assigned parking spaces rent for $10 per month.
      </p>
      <br />
      <p className='Fees'>
        <GiSittingDog />
        <b>Pet Policy</b>
        <GiCat /> Pets are welcome at Uptown Landing up to a maximum weight of
        50lbs each and a maximum of two (2) pets in total with a nonrefundable
        fee of $200 per pet at the time of move-in, a $300, fully refundable pet
        deposit and a $35 per month pet rent, for each pet. Some breed
        restrictions do apply, please contact us for more details.
      </p>
    </section>
  )
}
