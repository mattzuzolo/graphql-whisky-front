import styled from 'styled-components';
import Link from 'components/Link';

const ExploreCTAText = styled.span`
  font-size: 36px;
`;

const Wrapper = styled.div`
  margin-bottom: 12px;
`;

const LandingText = () => (
  <Wrapper>
    <Link href="/explore">
      <ExploreCTAText>Go explore the world of whiskey!</ExploreCTAText>
    </Link>
  </Wrapper>
);

export default LandingText;
