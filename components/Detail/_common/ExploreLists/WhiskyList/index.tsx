import Title from './Title';
import { useMemo, useState, ChangeEvent } from 'react';

import Whisky from '_types/Whisky';
import WhiskyListItem from '../../ListItems/WhiskyListItem';

import SectionHeader from '../SectionHeader';
import Select from '../Select';
import Producer from '_types/Producer';
import NoResults from './NoResults';

type Props = {
  countryName: string;
  whiskys: Whisky[];
  producers: Producer[];
};

const WhiskyList = ({
  countryName,
  whiskys,
  producers,
}: Props): JSX.Element => {
  const [selectedProducerName, setSelectedProducerName] = useState<string | ''>(
    ''
  );

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    setSelectedProducerName(value);
  };

  const whiskysToDisplay = useMemo(() => {
    if (selectedProducerName) {
      // return whiskys filtered by producery
      return producers.find(
        (producer: Producer) => producer.name === selectedProducerName
      )?.whiskys;
    }

    // Return all producers if select option is null
    return whiskys;
  }, [selectedProducerName]);
  return (
    <>
      <SectionHeader>
        <Title countryName={countryName} />
        <Select
          onChange={onChangeSelect}
          items={producers.map((producer: Producer) => producer.name)}
          category="producer"
          value={selectedProducerName}
        />
      </SectionHeader>
      {whiskysToDisplay && whiskysToDisplay.length > 0 ? (
        whiskysToDisplay.map((whisky: Whisky) => {
          const style = whisky.blended
            ? 'Blended whisky'
            : 'Single Malt whisky';
          let label: string;
          if (whisky.producer?.region) {
            label = `${whisky.producer?.region.name} ${style}`;
          } else {
            label = style;
          }
          return (
            <WhiskyListItem
              key={whisky.id}
              whiskyHref={`/whiskies/${whisky.id}`}
              whiskyName={whisky.name}
              label={label}
              producerName={whisky.producer.name}
            />
          );
        })
      ) : (
        <NoResults currentProducer={selectedProducerName} />
      )}
    </>
  );
};

export default WhiskyList;
