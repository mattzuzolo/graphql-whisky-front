import styled from 'styled-components';
import colors from 'styles/colors';

const StyledH1 = styled.h1`
  margin: 0;
  padding: 0;
`;

const RegionName = styled.span`
  color: ${colors.primary};
`;

type Props = {
  countryName: string;
  regionName?: string;
};

const Title = ({ countryName, regionName }: Props): JSX.Element => {
  return (
    <StyledH1>
      Explore{' '}
      <RegionName>
        {/* Only add regionName with comma if it exists */}
        {regionName && <span>{regionName},</span>} {countryName}
      </RegionName>
    </StyledH1>
  );
};

export default Title;
