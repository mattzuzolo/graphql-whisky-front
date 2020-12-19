import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/client';

import { initializeApollo } from '../../lib/apolloClient';
import { GET_DISTILLER_BY_ID } from '../../apolloClient';
import Layout from '../../components/Layout';
import DistillerDetail from 'components/Detail/DistillerDetail';

type Props = {
  id: string;
};
const DistillerPage = ({ id }: Props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_DISTILLER_BY_ID, {
    variables: {
      id,
    },
  });

  const { distiller } = data;

  return (
    <Layout>
      {!loading && distiller && (
        <DistillerDetail distiller={distiller} whiskys={distiller.whiskys} />
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: any
): Promise<any> => {
  console.log('DISTILLER QUERY:', context.query);
  const { id } = context.query;
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_DISTILLER_BY_ID,
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

export default DistillerPage;
