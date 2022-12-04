import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import NavButtons from './NavButtons'
import MenuToggle from './MenuToggle'

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 400ms ease;
`

const LinksWrapper = styled.ul`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 4.0625em;
  left: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(0.5em);
  transition: all 400ms ease;
`

const LinkItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.75em 0;
  padding: 0 1.1em;
  color: hsl(var(--clr-white));
  text-transform: uppercase;
  font-weight: 500;
  transition: all 400ms ease;
`

const Link = styled.a`
  color: inherit;
  transition: all 400ms ease;

  &:hover,
  &:focus {
    color: hsl(var(--clr-primary));
  }
`

const Marginer = styled.div`
  height: 2em;
  transition: all 400ms ease;
`

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
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        // Use framer motion here to create animation of nav coming in
        <LinksWrapper>
          <LinkItem>
            <Link href='#'>About</Link>
          </LinkItem>
          <LinkItem>
            <Link href='#'>Features</Link>
          </LinkItem>
          <LinkItem>
            <Link href='#'>Floorplans</Link>
          </LinkItem>
          <LinkItem>
            <Link href='#'>Gallery</Link>
          </LinkItem>
          <Marginer />
          <NavButtons />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  )
}

export default MobileNavLinks
