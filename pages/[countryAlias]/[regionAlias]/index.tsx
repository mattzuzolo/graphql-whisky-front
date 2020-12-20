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
  const { producers, name: regionName } = region;

  // Flatten whiskies from each producer so we have a simple list
  // Prisma doesn't have a flatten feature
  // TODO: move this to server side?
  const flattenedWhiskys = producers.reduce((acc: any[], producer: any) => {
    console.log('EACH PRODUCER:', producer);
    if (producer.whiskys.length > 0) {
      console.log('list:', producer.whiskys);
      return [...acc, ...producer.whiskys]; // merge accumulator and each producer's array of whiskys
    }
    return acc;
  }, []);

  return (
    <Layout>
      {!loading && (
        <RegionDetail
          country={region.country}
          producers={producers}
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

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      regionAlias: regionAlias,
    },
    // revalidate: 1, // WHAT DOES THIS DO?
  };
};

export default RegionPage;
