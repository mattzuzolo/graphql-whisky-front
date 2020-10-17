import Layout from '../components/Layout';
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from '../components/PostList';
import { initializeApollo } from '../lib/apolloClient';

const HomePage = () => (
  <Layout>
    <h1>Welcome to Home!</h1>
    {/* <PostList /> */}
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
