import Country from './Country';
import Distiller from './Distiller';

type Region = {
  id: string;
  name: string;
  shortName?: string;
  alias: string;

  distillers: Distiller[];
  region: Region[];
};

export default Region;
