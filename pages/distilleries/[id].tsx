import { GetServerSideProps } from 'next';

import Layout from '../../components/Layout';
import Link from '../../components/Link';

import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../lib/apolloClient';

import { GET_DISTILLER_BY_ID } from '../../apolloClient';

type Props = {
  id: string;
};
const DistilleryPage = ({ id }: Props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_DISTILLER_BY_ID, {
    variables: {
      id,
    },
  });
  console.log('QUERIED DATA:', data);

  const { distiller } = data;

  if (loading) {
    return (
      <Layout>
        <span>Loading...</span>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Distiller: {distiller.name}</h1>
      {!loading && (
        <h2>
          {distiller.region.name}, {distiller.country.name}
        </h2>
      )}
      {/* <h3>{`${distiller.name}'s ${getCategoryName(
        distiller.country
      )} lineup:`}</h3> */}
      <ul>
        {distiller.whiskys.map((whisky: any) => (
          <li>
            <Link href={`/whiskies/${whisky.id}`}>{whisky.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: any
): Promise<any> => {
  console.log('DISTILLER QUERY:', context.query);
  const { id } = context.query;
  const apolloClient = initializeApollo();

  const RESULT = await apolloClient.query({
    query: GET_DISTILLER_BY_ID,
    variables: {
      id,
    },
  });

  // console.log('DISTILLER RESULT', RESULT);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      id,
    },
    // revalidate: 1, // WHAT DOES THIS DO?
  };
};

export default DistilleryPage;
