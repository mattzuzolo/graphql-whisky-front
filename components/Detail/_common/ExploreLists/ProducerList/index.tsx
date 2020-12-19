import { useMemo, useState, ChangeEvent } from 'react';
import styled from 'styled-components';

import Title from './Title';
import ProducerItem from '../../ListItems/ProducerListItem';
import Producer from '_types/Producer';
import Select from '../Select';
import SectionHeader from '../SectionHeader';

type Props = {
  countryName: string;
  producers: Producer[];
};

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const ProducerList = ({ countryName, producers }: Props): JSX.Element => {
  const [selectedRegionName, setSelectedRegionName] = useState<string | null>(
    null
  );
  const regions = producers.reduce(
    (acc: string[], currentProducer: Producer) => {
      const { region } = currentProducer;
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

  const producersToDisplay = useMemo(() => {
    if (selectedRegionName) {
      // filtered producers
      return producers.filter(
        (producer: Producer) => producer?.region?.name === selectedRegionName
      );
    }

    // Return all producers if select option is null
    return producers;
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
      {producersToDisplay.map((producer: Producer) => {
        const sampleWhisky = producer.whiskys[0];
        let label = 'Producer';
        if (sampleWhisky) {
          label = !sampleWhisky.blended ? 'Single malt producer' : 'Producer';
        }
        return (
          <ProducerItem
            key={producer.id}
            countryName={countryName}
            producerHref={`/producers/${producer.id}`}
            producerName={producer.name}
            producerRegion={producer.region}
            label={label}
          />
        );
      })}
    </Wrapper>
  );
};

export default ProducerList;
