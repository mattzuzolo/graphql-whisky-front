import Country from './Country';
import Region from './Region';
import Whisky from './Whisky';

type Distiller = {
  id: string;
  name: string;

  whiskys: Whisky[];
  country: Country;
  region?: Region;
};

export default Distiller;
