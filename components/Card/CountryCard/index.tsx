import Link from 'components/Link';
import styled from 'styled-components';
import colors from 'styles/colors';

const StyledDiv = styled.div`
  border: 2px solid ${colors.grayscale.lightGray};
  border-left: 5px solid ${colors.brand.primary};
  border-radius: 5px;

  &:hover {
    border-color: ${colors.brand.primary};
  }

  padding: 12px;
  margin-bottom: 20px;
`;

const StyledH3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 22px;
  margin-bottom: 4px;
`;

type Props = {
  countryName: string;
  countryHref: string;
};

const CountryCard = ({ countryName, countryHref }: Props): JSX.Element => {
  return (
    <Link href={countryHref}>
      <StyledDiv>
        <StyledH3>{countryName}</StyledH3>
      </StyledDiv>
    </Link>
  );
};

export default CountryCard;
