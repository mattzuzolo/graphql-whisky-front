import styled from 'styled-components';

import colors from 'styles/colors';
import Breakpoints from 'styles/breakpoints';

type Props = {
  currentDistiller: string;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;
  height: 150px;
  border: solid 3px ${colors.brand.primary};
  border-radius: 10px;
`;

const StyledH3 = styled.h3`
  font-size: 32px;

  @media (max-width: ${Breakpoints.tablet - 1}px) {
    font-size: 26px;
  }
`;

const Title = ({ currentDistiller }: Props): JSX.Element => {
  return (
    <Wrapper>
      <StyledH3>No whiskys available from {currentDistiller}</StyledH3>
    </Wrapper>
  );
};

export default Title;
