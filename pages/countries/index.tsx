import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/client';

import { initializeApollo } from '../../lib/apolloClient';
import { GET_COUNTIRES } from '../../apolloClient';
import Layout from '../../components/Layout';
import CountriesList from '@components/_pages/Countries/CountriesList';

const CountriesPage = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_COUNTIRES);
  const { countries } = data;

  return (
    <Layout>
      {!loading && countries && <CountriesList countries={countries} />}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: any
): Promise<any> => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_COUNTIRES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    // revalidate: 1, // WHAT DOES THIS DO?
  };
};

export default CountriesPage;
