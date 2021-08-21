import styled from 'styled-components';
import Link from 'components/Link';
import Breakpoints from 'styles/breakpoints';
import colors from 'styles/colors';

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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
  height: 300px;
  width: 400px;
  margin-bottom: 12px;

  /* Add text in top left of div */
  position: relative;
  background-color: ${colors.brand.primary};

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

const LinkButton = styled.a`
  height: 300px;
  width: 400px;
  margin-bottom: 12px;

  /* Add text in top left of div */
  position: relative;
  background-color: #ff8837;

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
  img: string;
};

const ExploreCountryCard = ({ label, alias, img }: Props): JSX.Element => {
  return (
    <LinkButton href={alias}>
        <Label>{label}</Label>
    </LinkButton>
  );
};

export default ExploreCountryCard;
