import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/client';

import { initializeApollo } from '../../lib/apolloClient';
import { GET_WHISKY_BY_ID } from '../../apolloClient';
import Layout from '../../components/Layout';
import WhiskyDetail from '../../components/Detail/WhiskyDetail';

type Props = {
  id: string;
};

const WhiskyPage = ({ id }: Props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_WHISKY_BY_ID, {
    variables: {
      id,
    },
  });
  const { whisky } = data;

  return (
    <Layout>
      {!loading && whisky && whisky.producer && (
        <WhiskyDetail whisky={whisky} producer={whisky.producer} />
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
    query: GET_WHISKY_BY_ID,
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

export default WhiskyPage;
