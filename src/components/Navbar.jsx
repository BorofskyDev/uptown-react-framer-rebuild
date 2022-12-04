import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Logo, MenuToggle, MobileNavLinks, NavLinks, NavButtons } from './Navbar/index'
import { DeviceSize } from './utils/responsive'

const NavbarContainer = styled.div`
  width: 100%;
  height: 3.75em;
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  box-shadow: 0 0.0625em 0.1875em rgba(0, 0, 0, 0.8);
`
const LeftSection = styled.div`
  display: flex;
`

const MiddleSection = styled.div`
  height: 100%;
  display: flex;
  flex: 2;
  justify-content: center;
`

const RightSection = styled.div`
  display: flex;
`

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <NavButtons />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  )
}

export default Navbar
