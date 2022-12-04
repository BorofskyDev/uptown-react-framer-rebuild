import { useState } from 'react'
import { motion } from 'framer-motion'
import NavButtons from './NavButtons'
import MenuToggle from './MenuToggle'

function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false)

  // const navbarAnimate = {
  //   offscreen: {x: 500, opacity: 0},
  //   onscreen: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {duration: 3, type: 'spring', bounce: 0.2}
  //   }
  // }
  return (
    <nav className='Mobile-links'>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        // Use framer motion here to create animation of nav coming in
        <ul className='Mobile-links__links-wrapper'>
          <li className='Mobile-links__links-wrapper--link-item'>
            <a
              className='Mobile-links__links-wrapper--link-item__link'
              href='#'
            >
              About
            </a>
          </li>
          <li className='Mobile-links__links-wrapper--link-item'>
            <a
              className='Mobile-links__links-wrapper--link-item__link'
              href='#'
            >
              Features
            </a>
          </li>
          <li className='Mobile-links__links-wrapper--link-item'>
            <a
              className='Mobile-links__links-wrapper--link-item__link'
              href='#'
            >
              Floorplans
            </a>
          </li>
          <li className='Mobile-links__links-wrapper--link-item'>
            <a
              className='Mobile-links__links-wrapper--link-item__link'
              href='#'
            >
              Gallery
            </a>
          </li>

          <NavButtons />
        </ul>
      )}
    </nav>
  )
}

export default MobileNavLinks
