import Whisky from '_types/Whisky';
import Distiller from '_types/Distiller';

import Name from './Name';
import Description from './Description';
import Recommendations from '../_common/Recommendations';

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
      <Name name={distiller.name} />
      <Description description={description} />
      <Recommendations
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
