function NavLinks() {
  return (
    <nav className='Nav-links'>
      <ul className='Nav-links__links-wrapper'>
        <li className='Nav-links__links-wrapper--link-item'>
          <a className='Nav-links__links-wrapper--link-item__link' href='#'>
            About
          </a>
        </li>
        <li className='Nav-links__links-wrapper--link-item'>
          <a className='Nav-links__links-wrapper--link-item__link' href='#'>
            Features
          </a>
        </li>
        <li className='Nav-links__links-wrapper--link-item'>
          <a className='Nav-links__links-wrapper--link-item__link' href='#'>
            Floorplans
          </a>
        </li>
        <li className='Nav-links__links-wrapper--link-item'>
          <a className='Nav-links__links-wrapper--link-item__link' href='#'>
            Gallery
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks
