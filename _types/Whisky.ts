import Distiller from './Distiller';

type Whisky = {
  id: string;
  name: string;
  blended: boolean;
  age?: number;
  distiller: Distiller;
};

export default Whisky;
