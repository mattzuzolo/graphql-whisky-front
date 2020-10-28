import styled from 'styled-components';
import colors from 'styles/colors';
import Breakpoints from 'styles/breakpoints';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Wrapper = styled.div`
  font-size: 26px;

  border-bottom: 2.5px solid ${colors.primary};
  background: rgb(255, 102, 0);
  background: linear-gradient(
    309deg,
    rgba(255, 102, 0, 1) 10%,
    rgba(255, 112, 16, 1) 100%
  );

  padding: 20px;

  margin-bottom: 50px;
  @media (max-width: ${Breakpoints.tablet}px) {
    margin-bottom: 25px;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <DesktopNav /> {/* Only shows on desktop */}
      <MobileNav /> {/* Only shows on mobile */}
    </Wrapper>
  );
};

export default Nav;
