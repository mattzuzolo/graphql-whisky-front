import styled from 'styled-components';
import colors from '../../../../styles/colors';
import Link from 'components/Link';

const StyledTable = styled.table`
  border-collapse: collapse;
  border: 1px solid ${colors.grayscale.lightGray};
  font-size: 18px;
  width: 100%; // width of table
  margin-bottom: 50px;
`;

const StyledTD = styled.td`
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 18px;
  padding-right: 42px;
  border: 1px solid ${colors.grayscale.lightGray};
`;

const LabelColumn = styled(StyledTD)`
  border-right: 2.5px solid ${colors.primary};
  background-color: ${colors.grayscale.backgroundGray};
  color: ${colors.grayscale.gray};
  font-weight: bold;
`;

const DataColumn = styled(StyledTD)`
  width: 100%;
`;

type Props = {
  distillerCountry: string;
  countryAlias: string;
  distillerRegion?: string;
  regionAlias?: string;
  distillerName: string;
  distillerId: string;
  age?: number;
  blended: boolean;
  style: string;
};

const Details = ({
  distillerCountry,
  distillerRegion,
  age,
  distillerName,
  style,
  distillerId,
  countryAlias,
  regionAlias,
}: Props): JSX.Element => {
  return (
    <StyledTable>
      {/* <tr>
        <LabelColumn>Style</LabelColumn>
        <DataColumn>{style}</DataColumn>
      </tr> */}
      <tbody>
        <tr>
          <LabelColumn>Distiller</LabelColumn>
          <DataColumn>
            <Link href={`/distilleries/${distillerId}`}>{distillerName}</Link>
          </DataColumn>
        </tr>
        <tr>
          <LabelColumn>Age</LabelColumn>
          <DataColumn>{!!age ? `${age} years` : 'No age statement'}</DataColumn>
        </tr>
        {distillerRegion && (
          <tr>
            <LabelColumn>Region</LabelColumn>
            <DataColumn>
              <Link href={`/${countryAlias}/${regionAlias}`}>
                {distillerRegion}
              </Link>
            </DataColumn>
          </tr>
        )}
        <tr>
          <LabelColumn>Country</LabelColumn>
          <DataColumn>
            <Link href={`/${countryAlias}`}>{distillerCountry}</Link>
          </DataColumn>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default Details;
