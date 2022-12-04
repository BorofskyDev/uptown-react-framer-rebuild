import { useState } from 'react'
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
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: 65px;
  left: 0;
  transition: all 400ms ease;
`

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
  transition: all 400ms ease;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  transition: all 400ms ease;
`

const Marginer = styled.div`
  height: 2em;
  transition: all 400ms ease;
`

function MobileNavLinks() {
   const [isOpen, setOpen] = useState(false)

   return (
     <NavLinksContainer>
       <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
       {isOpen && (
         // Use framer motion here to create animation of nav coming in
         <LinksWrapper>
           <LinkItem>
             <Link href='#'>About us</Link>
           </LinkItem>
           <LinkItem>
             <Link href='#'>How it works</Link>
           </LinkItem>
           <LinkItem>
             <Link href='#'>Explore</Link>
           </LinkItem>
           <LinkItem>
             <Link href='#'>Impact</Link>
           </LinkItem>
           <Marginer />
           <NavButtons />
         </LinksWrapper>
       )}
     </NavLinksContainer>
   )
}

export default MobileNavLinks
