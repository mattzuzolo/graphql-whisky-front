import Whisky from '_types/Whisky';
import Distiller from '_types/Distiller';

import Name from './Name';
import Description from './Description';
import MoreWhisky from './MoreWhisky';
import Details from './Details';

type Props = {
  whisky: Whisky;
  distiller: Distiller;
};

const WhiskyDetail = ({ whisky, distiller }: Props): JSX.Element => {
  const origin = distiller.country.name as string;
  const style =
    origin.toLowerCase() === 'scotland' ? 'Scotch Whisky' : 'Whiskey';
  const description = `${whisky.blended ? 'Blended' : 'Single Malt'} ${style}`;
  return (
    <>
      <Name name={whisky.name} />
      <Description description={description} />
      <Details
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
      <MoreWhisky
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
