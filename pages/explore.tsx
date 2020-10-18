import Layout from '../components/Layout';
import { initializeApollo } from '../lib/apolloClient';
import Link from '../components/Link';

import { GET_COUNTIRES } from '../apolloClient';
import { useQuery } from '@apollo/client';

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_COUNTIRES);
  console.log('QUERIED DATA:', data);

  const { countries } = data;

  return (
    <Layout>
      <h1>Explore whiskies from around the world:</h1>
      <h3>List of countries:</h3>
      {!loading && (
        <ul>
          {countries.map((country: any) => (
            <li key={country.alias}>
              <Link href={country.alias}>{country.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const RESULT = await apolloClient.query({
    query: GET_COUNTIRES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default HomePage;
