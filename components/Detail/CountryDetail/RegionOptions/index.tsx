import styled from 'styled-components';
import Region from '_types/Region';
import Link from 'components/Link';

const StyledP = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

const RegionName = styled.span`
  margin-right: 6px;
`;

type Props = {
  regions: Region[];
  countryAlias: string;
};

const RegionList = ({ regions, countryAlias }: Props): JSX.Element => {
  return (
    <StyledP>
      Or visit a region directly:{' '}
      {regions.map((region: Region, index: number) => {
        return (
          <>
            <Link href={`${countryAlias}/${region.alias}`}>
              <RegionName>{region.name}</RegionName>
            </Link>
            {regions.length - 1 > index && <span>{'/ '}</span>}
          </>
        );
      })}
    </StyledP>
  );
};

export default RegionList;
