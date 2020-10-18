type Props = {
  name: string;
};

const Name = ({ name }: Props): JSX.Element => {
  return <h1>{name}</h1>;
};

export default Name;
