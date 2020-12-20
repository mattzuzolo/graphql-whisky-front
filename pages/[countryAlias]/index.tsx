import { GetServerSideProps } from 'next';

import Layout from '../../components/Layout';
import CountryDetail from 'components/Detail/CountryDetail';

import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../lib/apolloClient';

import { GET_COUNTRY_BY_ALIAS } from '../../apolloClient';

type Props = {
  countryAlias: string;
};
const CountryPage = ({ countryAlias }: Props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_COUNTRY_BY_ALIAS, {
    variables: {
      alias: countryAlias,
    },
  });
  console.log('QUERIED DATA:', data);

  const { countryByAlias: country } = data;
  const { producers, regions } = country;

  // Flatten whiskies from each producer so we have a simple list
  // Prisma doesn't have a flatten feature
  // TODO: move this to server side?
  const flattenedWhiskys = country.producers.reduce(
    (acc: any[], producer: any) => {
      console.log('EACH PRODUCER:', producer);
      if (producer.whiskys.length > 0) {
        console.log('list:', producer.whiskys);
        return [...acc, ...producer.whiskys]; // merge accumulator and each producer's array of whiskys
      }
      return acc;
    },
    []
  );

  return (
    <Layout>
      {!loading && (
        <CountryDetail
          country={country}
          regions={regions}
          producers={producers}
          whiskys={flattenedWhiskys}
        />
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: any
): Promise<any> => {
  console.log('COUNTRY QUERY:', context.query);
  const { countryAlias } = context.query;
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_COUNTRY_BY_ALIAS,
    variables: {
      alias: countryAlias,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      countryAlias,
    },
    // revalidate: 1, // WHAT DOES THIS DO?
  };
};

export default CountryPage;
