import Title from './Title';
import WhiskyRecommendation from './WhiskyRecommendation';

import Whisky from '_types/Whisky';

type Props = {
  producerId: string;
  producerName: string;
  producerRegion?: string;
  producerCountry: string;
  whiskys: Whisky[];
  isProducerPage?: boolean;
};

const WhiskyList = ({
  producerId,
  producerName,
  producerRegion,
  producerCountry,
  whiskys,
  isProducerPage = false,
}: Props): JSX.Element => {
  return (
    <>
      <Title
        producerHref={`/producers/${producerId}`}
        producerName={producerName}
        isProducerPage={isProducerPage}
      />
      {whiskys.map((whisky: any) => (
        <WhiskyRecommendation
          key={whisky.id}
          whiskyHref={`/whiskies/${whisky.id}`}
          whiskyName={whisky.name}
          blended={whisky.blended}
          style={whisky.blended ? 'Blended' : 'Single Malt'}
          producerRegion={producerRegion}
          producerCountry={producerCountry}
        />
      ))}
    </>
  );
};

export default WhiskyList;
