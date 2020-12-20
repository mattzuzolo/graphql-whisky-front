import Layout from '../components/Layout';
import { initializeApollo } from '../lib/apolloClient';

import { GET_COUNTIRES } from '../apolloClient';
import { useQuery } from '@apollo/client';
import CountryCard from 'components/Card/Country';
import CountryFeed from '@components/_common/exploreDetail/CountryFeed';

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_COUNTIRES);
  console.log('~~~QUERIED DATA:', data);

  const { countries } = data;

  return (
    <Layout>
      <h1>Explore whiskies by country:</h1>
      {!loading && (
        <CountryFeed>
          {countries.map((country: any) => (
            <CountryCard
              key={country.id}
              label={`${country.shortName} 🏴󠁧󠁢󠁳󠁣󠁴󠁿`}
              alias={country.alias}
            />
          ))}
        </CountryFeed>
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
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
