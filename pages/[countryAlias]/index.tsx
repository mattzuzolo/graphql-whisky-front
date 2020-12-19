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
  const { distillers, regions } = country;

  // Flatten whiskies from each distiller so we have a simple list
  // Prisma doesn't have a flatten feature
  // TODO: move this to server side?
  const flattenedWhiskys = country.distillers.reduce(
    (acc: any[], distiller: any) => {
      console.log('EACH DISTILLER:', distiller);
      if (distiller.whiskys.length > 0) {
        console.log('list:', distiller.whiskys);
        return [...acc, ...distiller.whiskys]; // merge accumulator and each distiller's array of whiskys
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
          distillers={distillers}
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
