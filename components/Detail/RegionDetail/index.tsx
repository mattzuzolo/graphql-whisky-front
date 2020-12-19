import Country from '_types/Country';
import Distiller from '_types/Distiller';
import Whisky from '_types/Whisky';
import ExplorePageTitle from '../../_common/exploreDetail/ExplorePageTitle';

import DistillerList from '../_common/ExploreLists/DistillerList';
import WhiskyList from '../_common/ExploreLists/WhiskyList';

type Props = {
  country: Country;
  distillers: Distiller[];
  whiskys: Whisky[];
  regionName: string;
};

const RegionDetail = ({
  distillers,
  whiskys,
  country,
  regionName,
}: Props): JSX.Element => {
  return (
    <>
      <ExplorePageTitle regionName={regionName} countryName={country.name} />
      <DistillerList countryName={regionName} distillers={distillers} />
      <WhiskyList
        countryName={regionName}
        whiskys={whiskys}
        distillers={distillers}
      />
    </>
  );
};

export default RegionDetail;
