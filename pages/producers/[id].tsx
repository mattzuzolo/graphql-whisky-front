import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/client';

import { initializeApollo } from '../../lib/apolloClient';
import { GET_PRODUCER_BY_ID } from '../../apolloClient';
import Layout from '../../components/Layout';
import ProducerDetail from 'components/Detail/ProducerDetail';

type Props = {
  id: string;
};
const ProducerPage = ({ id }: Props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_PRODUCER_BY_ID, {
    variables: {
      id,
    },
  });

  const { producer } = data;

  return (
    <Layout>
      {!loading && producer && (
        <ProducerDetail producer={producer} whiskys={producer.whiskys} />
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: any
): Promise<any> => {
  console.log('PRODUCER QUERY:', context.query);
  const { id } = context.query;
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_PRODUCER_BY_ID,
    variables: {
      id,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      id,
    },
    // revalidate: 1, // WHAT DOES THIS DO?
  };
};

export default ProducerPage;
