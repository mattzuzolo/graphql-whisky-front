import styled from 'styled-components';
import LandingImage from './LandingImage';
import LandingCTA from './LandingCTA';
import LandingText from './LandingText';
import Breakpoints from 'styles/breakpoints';

const Wrapper = styled.div`
  @media (min-width: ${Breakpoints.laptop - 1}px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  @media (min-width: ${Breakpoints.tablet}px) {
    width: 600px;
  }

  @media (min-width: ${Breakpoints.laptop}px) {
    width: 600px;
  }
`;

const TextWrapper = styled.div`
  @media (min-width: ${Breakpoints.laptop - 1}px) {
    display: flex;
    flex-direction: column;
    margin-top: 250px;
    margin-left: 22px;
  }

  @media (min-width: ${Breakpoints.laptop}px) {
    display: flex;
    flex-direction: column;
    margin-top: 250px;
    margin-left: 22px;
  }
`;

const LandingPage = () => (
  <Wrapper>
    <TextWrapper>
      <LandingText />
      <LandingCTA />
    </TextWrapper>
    <ImageWrapper>
      <LandingImage />
    </ImageWrapper>
  </Wrapper>
);

export default LandingPage;
