import Layout from '../components/Layout';
import { initializeApollo } from '../lib/apolloClient';

import LandingPage from '@components/_pages/index/LandingPage';

const HomePage = () => (
  <Layout>
    <LandingPage />
  </Layout>
);

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: ALL_POSTS_QUERY,
//     variables: allPostsQueryVars,
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     revalidate: 1,
//   };
// }

export default HomePage;
