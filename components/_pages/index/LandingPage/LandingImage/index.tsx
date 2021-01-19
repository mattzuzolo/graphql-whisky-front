import styled from 'styled-components';
import Link from 'components/Link';
import Breakpoints from 'styles/breakpoints';

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const LandingImage = () => (
  <>
    <StyledImg src="/whisky-shelf.jpg" />
  </>
);

export default LandingImage;
