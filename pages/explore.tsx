import Layout from '../components/Layout';
import { initializeApollo } from '../lib/apolloClient';

import { GET_COUNTIRES } from '../apolloClient';
import ExploreCountryCard from '@components/Card/ExploreCountry';
import CountryFeed from '@components/_common/exploreDetail/CountryFeed';
import popularCountries, { PopularCountry } from 'assets/popularCountries';

const HomePage = () => {
  return (
    <Layout>
      <h1>Explore whiskies by country: </h1>
      <CountryFeed>
        {popularCountries.map((country: PopularCountry) => (
          <ExploreCountryCard
            key={country.alias}
            label={`${country.shortName} 󠁧󠁢󠁳󠁣󠁴${country.flagEmojiCode}`}
            alias={country.alias}
            img={country.img}
          />
        ))}
      </CountryFeed>
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
