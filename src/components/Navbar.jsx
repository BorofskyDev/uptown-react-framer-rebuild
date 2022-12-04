import { useMediaQuery } from 'react-responsive'
import { Logo, MobileNavLinks, NavLinks, NavButtons } from './Navbar/index'
import { DeviceSize } from './utils/responsive'

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

  return (
    <div className='Navbar'>
      <div className='Navbar__left-section'>
        <Logo />
      </div>
      <div className='Navbar__middle-section'>{!isMobile && <NavLinks />}</div>
      <div className='Navbar__right-section'>
        {!isMobile && <NavButtons />}
        {isMobile && <MobileNavLinks />}
      </div>
    </div>
  )
}

export default Navbar
