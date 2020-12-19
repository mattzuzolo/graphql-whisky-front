import Country from './Country';
import Region from './Region';
import Whisky from './Whisky';

type Producer = {
  id: string;
  name: string;

  whiskys: Whisky[];
  country: Country;
  region?: Region;
};

export default Producer;
