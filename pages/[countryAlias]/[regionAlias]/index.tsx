import { GetServerSideProps } from 'next';

import Layout from '../../../components/Layout';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../../lib/apolloClient';

import RegionDetail from 'components/Detail/RegionDetail';

import { GET_REGION_BY_ALIAS } from '../../../apolloClient';

type Props = {
  regionAlias: string;
};
const RegionPage = ({ regionAlias }: Props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_REGION_BY_ALIAS, {
    variables: {
      alias: regionAlias,
    },
  });
  console.log('QUERIED DATA:', data);

  const { regionByAlias: region } = data;
  console.log('\n\n REGION:', region);

  return (
    <Layout>
      {!loading && (
        <RegionDetail
          country={region.country}
          distillers={region.distillers}
          regionName={region.name}
        />
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: any
): Promise<any> => {
  console.log('CONTEXT:QUERY:', context.query);
  const { regionAlias } = context.query;
  const apolloClient = initializeApollo();

  const RESULT = await apolloClient.query({
    query: GET_REGION_BY_ALIAS,
    variables: {
      alias: regionAlias,
    },
  });

  console.log('REGION RESULT', RESULT);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      regionAlias: regionAlias,
    },
    // revalidate: 1, // WHAT DOES THIS DO?
  };
};

export default RegionPage;
