import Title from './Title';
import Country from '_types/Country';
import Distiller from '_types/Distiller';
import Whisky from '_types/Whisky';

import DistillerList from './DistillerList';
import WhiskyList from './WhiskyList';

type Props = {
  country: Country;
  distillers: Distiller[];
  whiskys: Whisky[];
};

const CountryDetail = ({
  country,
  distillers,
  whiskys,
}: Props): JSX.Element => {
  return (
    <>
      <Title countryName={country.name} />
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
