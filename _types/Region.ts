import Country from './Country';
import Distiller from './Distiller';

type Region = {
  id: string;
  name: string;
  shortName?: string;
  alias: string;

  distillers: Distiller[];
  country: Country;
};

export default Region;
