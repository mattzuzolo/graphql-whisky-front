import Country from '_types/Country';
import Producer from '_types/Producer';
import Whisky from '_types/Whisky';
import ExplorePageTitle from '../../_common/exploreDetail/ExplorePageTitle';

import ProducerList from '../_common/ExploreLists/ProducerList';
import WhiskyList from '../_common/ExploreLists/WhiskyList';

type Props = {
  country: Country;
  producers: Producer[];
  whiskys: Whisky[];
  regionName: string;
};

const RegionDetail = ({
  producers,
  whiskys,
  country,
  regionName,
}: Props): JSX.Element => {
  return (
    <>
      <ExplorePageTitle regionName={regionName} countryName={country.name} />
      <ProducerList countryName={regionName} producers={producers} />
      <WhiskyList
        countryName={regionName}
        whiskys={whiskys}
        producers={producers}
      />
    </>
  );
};

export default RegionDetail;
