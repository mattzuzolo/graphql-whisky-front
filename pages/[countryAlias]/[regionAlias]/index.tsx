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
  const { distillers, name: regionName } = region;
  console.log('\n\n REGION:', region);

  // Flatten whiskies from each distiller so we have a simple list
  // Prisma doesn't have a flatten feature
  // TODO: move this to server side?
  const flattenedWhiskys = distillers.reduce((acc: any[], distiller: any) => {
    console.log('EACH DISTILLER:', distiller);
    if (distiller.whiskys.length > 0) {
      console.log('list:', distiller.whiskys);
      return [...acc, ...distiller.whiskys]; // merge accumulator and each distiller's array of whiskys
    }
    return acc;
  }, []);

  return (
    <Layout>
      {!loading && (
        <RegionDetail
          country={region.country}
          distillers={distillers}
          regionName={regionName}
          whiskys={flattenedWhiskys}
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
