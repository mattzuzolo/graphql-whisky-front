import styled from 'styled-components';
import Breakpoints from 'styles/breakpoints';

const Title = styled.h1`
  font-size: 56px;
  margin: 0;
  margin-bottom: 16px;
  padding: 0;

  @media (max-width: ${Breakpoints.tablet - 1}px) {
    font-size: 46px;
  }
`;

const SubTitle = styled.h2`
  margin: 0;
  padding: 0;

  @media (max-width: ${Breakpoints.tablet - 1}px) {
    font-size: 22px;
  }
`;

const LandingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 12px;
`;

const LandingText = () => (
  <LandingTextWrapper>
    <Title>Whiskey Explorer</Title>
    <SubTitle>Search whiskey from around the world</SubTitle>
  </LandingTextWrapper>
);

export default LandingText;
