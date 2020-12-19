import Whisky from '_types/Whisky';
import Producer from '_types/Producer';

import DetailPageTitle from '../../_common/itemDetail/DetailPageTitle';
import DetailPageSubhead from '../../_common/itemDetail/DetailPageSubhead';
import WhiskyList from '../_common/WhiskyList';

type Props = {
  producer: Producer;
  whiskys: Whisky[];
};

const ProducerDetail = ({ producer, whiskys }: Props): JSX.Element => {
  const { id, name, country, region } = producer;
  const regionString = `${producer.region?.name},`; // add comma here because sometimes we only have a country
  const description = `${regionString} ${producer.country.name}`;

  return (
    <>
      <DetailPageTitle name={producer.name} />
      <DetailPageSubhead description={description} />
      <WhiskyList
        producerId={id}
        producerName={name}
        producerCountry={country.name}
        producerRegion={region?.name}
        whiskys={whiskys}
      />
    </>
  );
};

export default ProducerDetail;
