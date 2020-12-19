import Whisky from '_types/Whisky';
import Distiller from '_types/Distiller';

import DetailPageTitle from '../../_common/itemDetail/DetailPageTitle';
import DetailPageSubhead from '../../_common/itemDetail/DetailPageSubhead';
import WhiskyList from '../_common/WhiskyList';

type Props = {
  distiller: Distiller;
  whiskys: Whisky[];
};

const DistillerDetail = ({ distiller, whiskys }: Props): JSX.Element => {
  const { id, name, country, region } = distiller;
  const regionString = `${distiller.region?.name},`; // add comma here because sometimes we only have a country
  const description = `${regionString} ${distiller.country.name}`;

  return (
    <>
      <DetailPageTitle name={distiller.name} />
      <DetailPageSubhead description={description} />
      <WhiskyList
        distillerId={id}
        distillerName={name}
        distillerCountry={country.name}
        distillerRegion={region?.name}
        whiskys={whiskys}
      />
    </>
  );
};

export default DistillerDetail;
