import Link from 'components/Link';
import styled from 'styled-components';
import Breakpoints from 'styles/breakpoints';

type Props = {
  countryName: string;
};

const StyledH2 = styled.h2`
  margin: 0;
  padding: 0;

  @media (max-width: ${Breakpoints.tablet - 1}px) {
    margin-bottom: 12px;
  }
`;

const Title = ({ countryName }: Props): JSX.Element => {
  return <StyledH2>Whiskys from {countryName}</StyledH2>;
};

export default Title;
