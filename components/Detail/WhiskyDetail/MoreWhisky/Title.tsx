import Link from 'components/Link';

type Props = {
  distillerHref: string;
  distillerName: string;
};

const Title = ({ distillerHref, distillerName }: Props): JSX.Element => {
  return (
    <h2>
      Check out more whiskys from{' '}
      <Link href={distillerHref}>{distillerName}</Link>
    </h2>
  );
};

export default Title;
