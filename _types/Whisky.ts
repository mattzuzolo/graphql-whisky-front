import Producer from './Producer';
import Style from './Style';

type Whisky = {
  id: string;
  name: string;
  blended: boolean;
  age?: number;
  producer: Producer;
  style: Style;
};

export default Whisky;
