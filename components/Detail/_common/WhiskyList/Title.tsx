import Link from 'components/Link';
import styled from 'styled-components';

type Props = {
  producerHref: string;
  producerName: string;
};

const H2 = styled.h2`
  margin-top: 6px;
`;

const Title = ({ producerHref, producerName }: Props): JSX.Element => {
  return (
    <H2>
      Check out more whiskys from{' '}
      <Link href={producerHref}>{producerName}</Link>
    </H2>
  );
};

export default Title;
