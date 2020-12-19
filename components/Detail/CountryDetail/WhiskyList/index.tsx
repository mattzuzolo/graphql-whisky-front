import Title from './Title';
import { useMemo, useState, ChangeEvent } from 'react';

import Whisky from '_types/Whisky';
import WhiskyListItem from '../../_common/ListItems/WhiskyListItem';

import SectionHeader from '../SectionHeader';
import Select from '../Select';
import Distiller from '_types/Distiller';
import NoResults from './NoResults';

type Props = {
  countryName: string;
  whiskys: Whisky[];
  distillers: Distiller[];
};

const WhiskyList = ({
  countryName,
  whiskys,
  distillers,
}: Props): JSX.Element => {
  const [selectedDistillerName, setSelectedDistillerName] = useState<
    string | ''
  >('');

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    setSelectedDistillerName(value);
  };

  const whiskysToDisplay = useMemo(() => {
    if (selectedDistillerName) {
      // return whiskys filtered by distillery
      return distillers.find(
        (distiller: Distiller) => distiller.name === selectedDistillerName
      )?.whiskys;
    }

    // Return all distillers if select option is null
    return whiskys;
  }, [selectedDistillerName]);
  return (
    <>
      <SectionHeader>
        <Title countryName={countryName} />
        <Select
          onChange={onChangeSelect}
          items={distillers.map((distiller: Distiller) => distiller.name)}
          category="distiller"
          value={selectedDistillerName}
        />
      </SectionHeader>
      {whiskysToDisplay && whiskysToDisplay.length > 0 ? (
        whiskysToDisplay.map((whisky: Whisky) => {
          const style = whisky.blended
            ? 'Blended whisky'
            : 'Single Malt whisky';
          let label: string;
          if (whisky.distiller?.region) {
            label = `${whisky.distiller?.region.name} ${style}`;
          } else {
            label = style;
          }
          return (
            <WhiskyListItem
              key={whisky.id}
              whiskyHref={`/whiskies/${whisky.id}`}
              whiskyName={whisky.name}
              label={label}
              distillerName={whisky.distiller.name}
            />
          );
        })
      ) : (
        <NoResults currentDistiller={selectedDistillerName} />
      )}
    </>
  );
};

export default WhiskyList;
