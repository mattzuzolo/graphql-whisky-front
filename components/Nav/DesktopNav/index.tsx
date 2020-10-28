import styled from 'styled-components';
import Breakpoints from 'styles/breakpoints';
import NavLink from '../NavLink';
import DesktopWrapper from './DesktopWrapper';

const LeftWrapper = styled.div`
  @media (max-width: ${Breakpoints.tablet}px) {
    display: none;
  }
`;

const RightWrapper = styled.div`
  @media (max-width: ${Breakpoints.tablet}px) {
    display: none;
  }
`;

const DesktopNav = () => {
  return (
    <DesktopWrapper>
      <LeftWrapper>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/explore">Explore</NavLink>
      </LeftWrapper>
      <RightWrapper>
        <NavLink href="/#">Login</NavLink>
        <NavLink href="/#">Sign up</NavLink>
      </RightWrapper>
    </DesktopWrapper>
  );
};

export default DesktopNav;
