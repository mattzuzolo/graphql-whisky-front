import styled from 'styled-components';
import Link from 'components/Link';
import Breakpoints from 'styles/breakpoints';
import colors from 'styles/colors';

const imgUrl =
  'https://live.staticflickr.com/65535/47943444598_d9af95da95_b.jpg';

const StyledImage = styled.img`
  width: 100%;
`;

const Label = styled.h3`
  margin: 0;
  padding: 0;
  color: ${colors.grayscale.white};
  font-size: 32px;

  @media (max-width: ${Breakpoints.laptop}px) {
    font-size: 26px;
  }

  /* Add text in top left of div */
  position: absolute;
  top: 7.5%;
  left: 7.5%;
`;

const Wrapper = styled.div`
  /* Add text in top left of div */
  position: relative;

  @media (min-width: ${Breakpoints.phone}px) {
    width: 100%;
    margin-bottom: 18px;
  }

  @media (min-width: ${Breakpoints.tablet - 2}px) {
    width: 46%;
    margin-bottom: 16px;
    margin-right: 16px;
  }

  @media (min-width: ${Breakpoints.laptop}px) {
    width: 48%;
    margin-bottom: 16px;
    margin-right: 16px;
  }

  @media (min-width: ${Breakpoints.laptop + 300}px) {
    width: 30%;
    margin-bottom: 16px;
    margin-right: 16px;
  }
`;

type Props = {
  label: string;
  alias: string;
};

const CountryCard = ({ label, alias }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Link href={alias}>
        <Label>{label}</Label>
        <StyledImage src={imgUrl}></StyledImage>
      </Link>
    </Wrapper>
  );
};

export default CountryCard;
