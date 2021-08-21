import Link from 'components/Link';
import styled from 'styled-components';

type Props = {
  producerHref: string;
  producerName: string;
  isProducerPage: boolean;
};

const H2 = styled.h2`
  margin-top: 6px;
`;

const Title = ({ producerHref, producerName, isProducerPage }: Props): JSX.Element => {
  return (
    <>
      {!isProducerPage ? <H2>
        Check out more whiskies from{' '}
        <Link href={producerHref}>{producerName}</Link>
      </H2> : null}
    </>
  );
};

export default Title;
