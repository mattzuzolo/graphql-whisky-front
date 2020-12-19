import styled from 'styled-components';
import Breakpoints from 'styles/breakpoints';

const Header = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: ${Breakpoints.tablet - 1}px) {
    flex-direction: column;
    justify-content: space-space-evenly;
  }
`;

export default Header;
