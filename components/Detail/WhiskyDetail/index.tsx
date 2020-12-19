import Whisky from '_types/Whisky';
import Distiller from '_types/Distiller';

import DetailPageTitle from '../../_common/itemDetail/DetailPageTitle';
import DetailPageSubhead from '../../_common/itemDetail/DetailPageSubhead';
import WhiskyList from '../_common/WhiskyList';
import DetailTable from './DetailTable';

type Props = {
  whisky: Whisky;
  distiller: Distiller;
};

const WhiskyDetail = ({ whisky, distiller }: Props): JSX.Element => {
  const origin = distiller.country.name as string;
  const style =
    origin.toLowerCase() === 'scotland' ? 'Scotch Whisky' : 'Whiskey';
  const description = `${whisky.blended ? 'Blended' : 'Single Malt'} ${style}`;
  console.log('ALIAS:', distiller);
  return (
    <>
      <DetailPageTitle name={whisky.name} />
      <DetailPageSubhead description={description} />
      <DetailTable
        blended={whisky.blended}
        age={whisky.age}
        style={style}
        distillerName={distiller.name}
        distillerId={distiller.id}
        distillerCountry={distiller.country.name}
        countryAlias={distiller.country.alias}
        distillerRegion={distiller.region?.name}
        regionAlias={distiller.region?.alias}
      />
      <WhiskyList
        distillerId={distiller.id}
        distillerName={distiller.name}
        distillerCountry={distiller.country.name}
        distillerRegion={distiller.region?.name}
        whiskys={distiller.whiskys}
      />
    </>
  );
};

export default WhiskyDetail;
