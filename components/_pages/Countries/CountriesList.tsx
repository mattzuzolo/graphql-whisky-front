import styled from 'styled-components';
import Country from '_types/Country';
import CountryCard from 'components/Card/CountryCard';

const Wrapper = styled.div``;

type Props = {
  countries: Country[];
};

const CountriesList = ({ countries }: Props) => (
  <Wrapper>
    <h1>All Countries:</h1>
    {countries.map((country: Country) => (
      <CountryCard countryName={country.name} countryHref={country.alias} />
    ))}
  </Wrapper>
);

export default CountriesList;
