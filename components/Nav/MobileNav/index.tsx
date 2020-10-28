import { useState } from 'react';
import NavLink from '../NavLink';
import Hamburger from './Hamburger';
import Drawer from './Drawer';
import HeaderWrapper from './HeaderWrapper';
import MobileWrapper from './MobileWrapper';

const MobileNav = () => {
  // Controls the dropdown, not if hamburger button is displayed
  const [displayMobileNavOptions, setDisplayMobileNavOptions] = useState<
    boolean
  >(false);
  const toggleMobileNav = (): void =>
    setDisplayMobileNavOptions(!displayMobileNavOptions);

  return (
    <MobileWrapper>
      <HeaderWrapper>
        <Hamburger onClick={toggleMobileNav} />
        <NavLink href="/">Home</NavLink>
      </HeaderWrapper>
      {displayMobileNavOptions && <Drawer />}
    </MobileWrapper>
  );
};

export default MobileNav;
