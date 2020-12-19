import Title from './Title';
import Country from '_types/Country';
import Region from '_types/Region';
import Distiller from '_types/Distiller';
import Whisky from '_types/Whisky';

import RegionList from './RegionOptions';
import DistillerList from '../_common/ExploreLists/DistillerList';
import WhiskyList from '../_common/ExploreLists/WhiskyList';

type Props = {
  country: Country;
  distillers: Distiller[];
  whiskys: Whisky[];
  regions: Region[];
};

const CountryDetail = ({
  country,
  regions,
  distillers,
  whiskys,
}: Props): JSX.Element => {
  return (
    <>
      <Title countryName={country.name} />
      <RegionList countryAlias={country.alias} regions={regions} />
      <DistillerList countryName={country.name} distillers={distillers} />
      <WhiskyList
        countryName={country.name}
        whiskys={whiskys}
        distillers={distillers}
      />
    </>
  );
};

export default CountryDetail;
