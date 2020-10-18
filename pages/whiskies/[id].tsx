import { GetServerSideProps } from 'next';

import Layout from '../../components/Layout';
import Link from '../../components/Link';

import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../lib/apolloClient';

import { GET_WHISKY_BY_ID } from '../../apolloClient';
import RegionPage from 'pages/[countryAlias]/[regionAlias]';

type Props = {
  id: string;
};
const DistilleryPage = ({ id }: Props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_WHISKY_BY_ID, {
    variables: {
      id,
    },
  });
  console.log('QUERIED DATA:', data);

  const { whisky } = data;

  if (loading) {
    return (
      <Layout>
        <span>Loading...</span>
      </Layout>
    );
  }

  const origin = whisky.distiller.country.name as string;
  const style =
    origin.toLowerCase() === 'scotland' ? 'Scotch whisky' : 'Whiskey';

  return (
    <Layout>
      <h1>{whisky.name}</h1>
      <h2>
        {whisky.blended ? 'Blended' : 'Single malt'} {style}
      </h2>
      <p>
        ORIGIN: {whisky.distiller.region.name}, {whisky.distiller.country.name}
      </p>
      <p>Age Statement: {whisky.age > 0 ? whisky.age : 'No age statemetn'}</p>

      {!loading && (
        <>
          <h6>
            Check out these other whiskys from{' '}
            <Link href={`/distilleries/${whisky.distiller.id}`}>
              {whisky.distiller.name}
            </Link>
          </h6>
          <ul>
            {whisky.distiller.whiskys.map((whisky: any) => (
              <li key={whisky.id}>
                <Link href={`/whiskies/${whisky.id}`}>{whisky.name}</Link>
              </li>
            ))}
          </ul>
        </>
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

  const RESULT = await apolloClient.query({
    query: GET_WHISKY_BY_ID,
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
