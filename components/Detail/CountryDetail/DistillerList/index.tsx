import Title from './Title';
import DistillerItem from '../../_common/ListItems/DistillerListItem';
import { useMemo, useState, ChangeEvent } from 'react';

import Distiller from '_types/Distiller';
import CountryPage from 'pages/[countryAlias]';
import styled from 'styled-components';
import Select from '../Select';
import Region from '_types/Region';
import { uniq } from 'lodash';

import SectionHeader from '../SectionHeader';

type Props = {
  countryName: string;
  distillers: Distiller[];
};

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const DistillerList = ({ countryName, distillers }: Props): JSX.Element => {
  const [selectedRegionName, setSelectedRegionName] = useState<string | null>(
    null
  );
  const regions = distillers.reduce(
    (acc: string[], currentDistiller: Distiller) => {
      const { region } = currentDistiller;
      if (region && !acc.includes(region.name)) acc.push(region.name);
      return acc;
    },
    []
  );

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    console.log('YOU CHANGE THE SELECT OPTION TO:', event.target);
    const value = event.target.value;
    setSelectedRegionName(value);
  };

  const distillersToDisplay = useMemo(() => {
    if (selectedRegionName) {
      // filtered distillers
      return distillers.filter(
        (distiller: Distiller) => distiller?.region?.name === selectedRegionName
      );
    }

    // Return all distillers if select option is null
    return distillers;
  }, [selectedRegionName]);

  return (
    <Wrapper>
      <SectionHeader>
        <Title countryName={countryName} />
        <Select
          onChange={onChangeSelect}
          items={regions}
          category="region"
          value={selectedRegionName ? selectedRegionName : ''}
        />
      </SectionHeader>
      {distillersToDisplay.map((distiller: Distiller) => {
        const sampleWhisky = distiller.whiskys[0];
        let label = 'Distiller';
        if (sampleWhisky) {
          label = !sampleWhisky.blended ? 'Single malt distiller' : 'Distiller';
        }
        return (
          <DistillerItem
            key={distiller.id}
            countryName={countryName}
            distillerHref={`/distilleries/${distiller.id}`}
            distillerName={distiller.name}
            distillerRegion={distiller.region}
            label={label}
          />
        );
      })}
    </Wrapper>
  );
};

export default DistillerList;
