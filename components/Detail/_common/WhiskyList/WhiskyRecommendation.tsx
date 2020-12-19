import Link from 'components/Link';
import styled from 'styled-components';
import colors from 'styles/colors';

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

const DetailWrapper = styled.div`
  color: ${colors.grayscale.black};
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
        <DetailWrapper>
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
        </DetailWrapper>
      </StyledDiv>
    </Link>
  );
};

export default ListItem;
