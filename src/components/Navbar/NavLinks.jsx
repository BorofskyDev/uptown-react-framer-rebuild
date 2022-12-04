import styled from 'styled-components'

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const LinksWrapper = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: hsl(var(--clr-white));
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid hsl(var(--clr-primary));
  }
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`

function NavLinks() {
  return (
    <NavLinksContainer>
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
      </LinksWrapper>
    </NavLinksContainer>
  )
}

export default NavLinks
