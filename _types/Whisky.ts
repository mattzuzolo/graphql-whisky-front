import Producer from './Producer';

type Whisky = {
  id: string;
  name: string;
  blended: boolean;
  age?: number;
  producer: Producer;
};

export default Whisky;
