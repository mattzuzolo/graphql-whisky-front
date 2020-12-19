import Title from './Title';
import Country from '_types/Country';
import Region from '_types/Region';
import Producer from '_types/Producer';
import Whisky from '_types/Whisky';

import RegionList from './RegionOptions';
import ProducerList from '../_common/ExploreLists/ProducerList';
import WhiskyList from '../_common/ExploreLists/WhiskyList';

type Props = {
  country: Country;
  producers: Producer[];
  whiskys: Whisky[];
  regions: Region[];
};

const CountryDetail = ({
  country,
  regions,
  producers,
  whiskys,
}: Props): JSX.Element => {
  return (
    <>
      <Title countryName={country.name} />
      <RegionList countryAlias={country.alias} regions={regions} />
      <ProducerList countryName={country.name} producers={producers} />
      <WhiskyList
        countryName={country.name}
        whiskys={whiskys}
        producers={producers}
      />
    </>
  );
};

export default CountryDetail;
