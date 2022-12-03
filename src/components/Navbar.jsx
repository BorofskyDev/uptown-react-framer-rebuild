import logo from '../assets/main-imgs/uptown-landing-logo-full.png'

export default function Navbar() {
  return (
    <header className='Navbar'>
      <div className='Navbar__logo'>
        {/* <a href="#"><img src={logo} alt="uptown landing" className='Navbar__logo--img' /></a> */}
      </div>
      <input type='checkbox' className='Navbar__btn' id='menu-btn' />
      <label htmlFor='menu-btn' className='Navbar__icon'>
        <span className='Navbar__icon--line'></span>
      </label>
      <ul className='Navbar__links'>
        <li className='Navbar__link'>
          <a href='#'>About</a>
        </li>
        <li className='Navbar__link'>
          <a href='#'>Features</a>
        </li>
        <li className='Navbar__link'>
          <a href='#'>Floorplans</a>
        </li>
        <li className='Navbar__link'>
          <a href='#'>Gallery</a>
        </li>
        <li className='Navbar__link'>
          <a href='#' className='Navbar__link--contact'>Contact Us</a>
        </li>
        <li className='Navbar__link'>
          <a href='#' className='Navbar__link--portal'>Resident Portal</a>
        </li>
      </ul>
    </header>
  )
}
