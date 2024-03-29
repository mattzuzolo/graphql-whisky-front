import Country from './Country';
import Producer from './Producer';

type Region = {
  id: string;
  name: string;
  shortName?: string;
  alias: string;

  producers: Producer[];
  country: Country;
};

export default Region;
