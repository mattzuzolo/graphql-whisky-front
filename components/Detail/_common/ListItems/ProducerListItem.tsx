import Link from 'components/Link';
import styled from 'styled-components';
import colors from 'styles/colors';
import Region from '_types/Region';

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

type Props = {
  countryName: string;
  producerHref: string;
  producerName: string;
  producerRegion?: Region;
  label: string;
};

const ProducerItem = ({
  countryName,
  producerHref,
  producerName,
  producerRegion,
  label,
}: Props): JSX.Element => {
  let fullLabel = `${label} from `;
  if (producerRegion?.name) {
    fullLabel += `the ${producerRegion.name} region of `;
  }
  return (
    <Link href={producerHref}>
      <StyledDiv>
        <StyledH3>{producerName}</StyledH3>
        {fullLabel && (
          <DetailWrapper>{`${fullLabel} ${countryName}`}</DetailWrapper>
        )}
      </StyledDiv>
    </Link>
  );
};

export default ProducerItem;
