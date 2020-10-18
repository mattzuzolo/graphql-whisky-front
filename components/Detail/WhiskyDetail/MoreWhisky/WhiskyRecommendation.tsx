import Link from 'components/Link';
import styled from 'styled-components';
import colors from '../../../../styles/colors';

type Props = {
  whiskyHref: string;
  whiskyName: string;
  blended: boolean;
  age?: number;
  style: string;
  distillerRegion?: string;
  distillerCountry: string;
};

const StyledDiv = styled.div`
  border: 2px solid ${colors.grayscale.lightGray};
  border-left: 5px solid ${colors.primary};
  border-radius: 5px;

  &:hover {
    border-color: ${colors.primary};
  }

  margin-bottom: 16px;
  padding: 12px;
`;

const StyledH3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 22px;
  margin-bottom: 4px;
`;

const ListItem = ({
  whiskyHref,
  whiskyName,
  blended,
  age,
  style,
  distillerRegion,
  distillerCountry,
}: Props): JSX.Element => {
  return (
    <Link href={whiskyHref}>
      <StyledDiv>
        <StyledH3>{whiskyName}</StyledH3>
        <span>
          {style}{' '}
          {distillerCountry.toLowerCase() === 'scotland'
            ? 'Scotch Whisky'
            : 'Whisky'}
        </span>
        <span>
          {' '}
          produced in {`${distillerRegion},`} {distillerCountry}
        </span>
      </StyledDiv>
    </Link>
  );
};

export default ListItem;
