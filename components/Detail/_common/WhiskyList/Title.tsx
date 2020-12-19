import Link from 'components/Link';
import styled from 'styled-components';

type Props = {
  distillerHref: string;
  distillerName: string;
};

const H2 = styled.h2`
  margin-top: 6px;
`;

const Title = ({ distillerHref, distillerName }: Props): JSX.Element => {
  return (
    <H2>
      Check out more whiskys from{' '}
      <Link href={distillerHref}>{distillerName}</Link>
    </H2>
  );
};

export default Title;
