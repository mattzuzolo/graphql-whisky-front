import Country from '_types/Country';
import Distiller from '_types/Distiller';
import Whisky from '_types/Whisky';
import ExplorePageTitle from '../../_common/exploreDetail/ExplorePageTitle';

import DistillerList from '../CountryDetail/DistillerList';
// import WhiskyList from './WhiskyList';

type Props = {
  country: Country;
  distillers: Distiller[];
  regionName: string;
};

const RegionDetail = ({
  distillers,
  country,
  regionName,
}: Props): JSX.Element => {
  console.log('country!', country);
  console.log('distillers!', distillers);

  return (
    <>
      <ExplorePageTitle
        regionName={regionName}
        countryName={country.shortName || country.name}
      />
      <p>I need to develop more components here</p>
    </>
  );
};

export default RegionDetail;
