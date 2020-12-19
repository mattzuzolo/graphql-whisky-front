import Whisky from '_types/Whisky';
import Producer from '_types/Producer';

import DetailPageTitle from '../../_common/itemDetail/DetailPageTitle';
import DetailPageSubhead from '../../_common/itemDetail/DetailPageSubhead';
import WhiskyList from '../_common/WhiskyList';
import DetailTable from './DetailTable';

type Props = {
  whisky: Whisky;
  producer: Producer;
};

const WhiskyDetail = ({ whisky, producer }: Props): JSX.Element => {
  const origin = producer.country.name as string;
  const style =
    origin.toLowerCase() === 'scotland' ? 'Scotch Whisky' : 'Whiskey';
  const description = `${whisky.blended ? 'Blended' : 'Single Malt'} ${style}`;
  console.log('ALIAS:', producer);
  return (
    <>
      <DetailPageTitle name={whisky.name} />
      <DetailPageSubhead description={description} />
      <DetailTable
        blended={whisky.blended}
        age={whisky.age}
        style={style}
        producerName={producer.name}
        producerId={producer.id}
        producerCountry={producer.country.name}
        countryAlias={producer.country.alias}
        producerRegion={producer.region?.name}
        regionAlias={producer.region?.alias}
      />
      <WhiskyList
        producerId={producer.id}
        producerName={producer.name}
        producerCountry={producer.country.name}
        producerRegion={producer.region?.name}
        whiskys={producer.whiskys}
      />
    </>
  );
};

export default WhiskyDetail;
