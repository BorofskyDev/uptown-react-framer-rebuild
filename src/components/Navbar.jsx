export default function Navbar() {
  return (
    <header className='Navbar'>
      <div className='Navbar__left-section'>
        <div className='Navbar__left-section--logo'>
          <span>Uptown Landing</span>
        </div>
      </div>
      <div className='Navbar__middle-section'>
        <div className='Navbar__links-container'>
          <ul className='Navbar__links-container--links-wrapper'>
            <li className='Navbar__links-container--links-wrapper__link-item'>
              <a
                href='#'
                className='Navbar__links-container--links-wrapper__link-item--link'
              >
                About
              </a>
            </li>
            <li className='Navbar__links-container--links-wrapper__link-item'>
              <a
                href='#'
                className='Navbar__links-container--links-wrapper__link-item--link'
              >
                Features
              </a>
            </li>
            <li className='Navbar__links-container--links-wrapper__link-item'>
              <a
                href='#'
                className='Navbar__links-container--links-wrapper__link-item--link'
              >
                Floorplans
              </a>
            </li>
            <li className='Navbar__links-container--links-wrapper__link-item'>
              <a
                href='#'
                className='Navbar__links-container--links-wrapper__link-item--link'
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='Navbar__right-section'>
        <button className='Navbar__right-section--contact-btn'>Contact</button>
        <button className='Navbar__right-section--portal-btn'>
          Resident Portal
        </button>
      </div>
    </header>
  )
}
