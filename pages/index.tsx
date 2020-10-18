import Layout from '../components/Layout';
import { initializeApollo } from '../lib/apolloClient';

const HomePage = () => (
  <Layout>
    <h1>Welcome to Home!</h1>
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
