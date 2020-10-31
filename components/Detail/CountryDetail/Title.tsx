import styled from 'styled-components';
import colors from 'styles/colors';

const StyledH1 = styled.h1`
  margin: 0;
  padding: 0;
`;

const CountryName = styled.span`
  color: ${colors.primary};
`;

type Props = {
  countryName: string;
};

const Title = ({ countryName }: Props): JSX.Element => {
  return (
    <>
      <StyledH1>
        Explore <CountryName>{countryName}</CountryName>
      </StyledH1>
    </>
  );
};

export default Title;
