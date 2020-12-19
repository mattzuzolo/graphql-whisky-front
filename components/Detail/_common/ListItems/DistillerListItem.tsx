import Link from 'components/Link';
import styled from 'styled-components';
import colors from '../../../../styles/colors';
import Region from '_types/Region';

const StyledDiv = styled.div`
  border: 2px solid ${colors.grayscale.lightGray};
  border-left: 5px solid ${colors.primary};
  border-radius: 5px;

  &:hover {
    border-color: ${colors.primary};
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

type Props = {
  countryName: string;
  distillerHref: string;
  distillerName: string;
  distillerRegion?: Region;
  label: string;
};

const DistillerItem = ({
  countryName,
  distillerHref,
  distillerName,
  distillerRegion,
  label,
}: Props): JSX.Element => {
  let fullLabel = `${label} from `;
  if (distillerRegion?.name) {
    fullLabel += `the ${distillerRegion.name} region of `;
  }
  return (
    <Link href={distillerHref}>
      <StyledDiv>
        <StyledH3>{distillerName}</StyledH3>
        {fullLabel && (
          <DetailWrapper>{`${fullLabel} ${countryName}`}</DetailWrapper>
        )}
      </StyledDiv>
    </Link>
  );
};

export default DistillerItem;
