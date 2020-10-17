import Layout from '../components/Layout';
import { initializeApollo } from '../lib/apolloClient';

const HomePage = () => (
  <Layout>
    <h1>Welcome to the Explore page!</h1>
  </Layout>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default HomePage;
