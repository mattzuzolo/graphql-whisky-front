import Whisky from '_types/Whisky';
import Producer from '_types/Producer';

import DetailPageTitle from '../../_common/itemDetail/DetailPageTitle';
import DetailPageSubhead from '../../_common/itemDetail/DetailPageSubhead';
import WhiskyList from '../_common/WhiskyList';
import NoResults from '../_common/ExploreLists/WhiskyList/NoResults';


type Props = {
  producer: Producer;
  whiskys: Whisky[];
};

const ProducerDetail = ({ producer, whiskys }: Props): JSX.Element => {
  const { id, name, country, region } = producer;
  const regionString = producer.region?.name; // add comma here because sometimes we only have a country
  const description = regionString ? `${regionString}, ${producer.country.name}` : producer.country.name;

  return (
    <>
      <DetailPageTitle name={producer.name} />
      <DetailPageSubhead description={description} />
      {whiskys.length ? <WhiskyList
        producerName={name}
        producerId={id}
        producerCountry={country.name}
        producerRegion={region?.name}
        whiskys={whiskys}
        isProducerPage
      /> : <NoResults currentProducer={producer.name} />}
    </>
  );
};

export default ProducerDetail;
