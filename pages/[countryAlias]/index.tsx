import { GetServerSideProps } from 'next';

import Layout from '../../components/Layout';
import Link from '../../components/Link';
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
  const { distillers } = country;

  // console.log('\n\nQUERY STUFF:', country.distillers);

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

  console.log('flattenedWhiskys with REDUCE', flattenedWhiskys);

  return (
    <Layout>
      {!loading && (
        <CountryDetail
          country={country}
          distillers={distillers}
          whiskys={flattenedWhiskys}
        />
      )}
      {/* {country.regions.length > 0 && (
        <ul>
          {country.regions.map((region: any) => (
            <Link
              key={`${country.id}:${region.id}`}
              href={`${country.alias}/${region.alias}`}
            >
              <li>{region.name}</li>
            </Link>
          ))}
        </ul>
      )} */}
      {/* TODO: refactor this to be more efficient */}
      {/* Maybe just build relationship between countries + regions and whiskies */}
      {/* <h3>Popular whiskies from {country.name}</h3>
      <ul>
        {flattenedWhiskys.map((whisky: any) => (
          <li>
            <Link href={`/whiskies/${whisky.id}`}>{whisky.name}</Link>
          </li>
        ))}
      </ul> */}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: any
): Promise<any> => {
  console.log('COUNTRY QUERY:', context.query);
  const { countryAlias } = context.query;
  const apolloClient = initializeApollo();

  const RESULT = await apolloClient.query({
    query: GET_COUNTRY_BY_ALIAS,
    variables: {
      alias: countryAlias,
    },
  });

  console.log('COUNTRY RESULT', RESULT);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      countryAlias,
    },
    // revalidate: 1, // WHAT DOES THIS DO?
  };
};

export default CountryPage;
