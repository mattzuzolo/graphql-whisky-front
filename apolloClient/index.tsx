import { gql } from '@apollo/client';

export const GET_COUNTRY_BY_ALIAS = gql`
  query CountryByAlias($alias: String!) {
    countryByAlias(alias: $alias) {
      id
      alias
      name
      shortName
      regions {
        id
        alias
        name
      }
      producers {
        id
        name
        region {
          name
        }
        whiskys {
          id
          name
          blended
          producer {
            name
          }
        }
      }
    }
  }
`;

export const GET_REGION_BY_ALIAS = gql`
  query RegionByAlias($alias: String!) {
    regionByAlias(alias: $alias) {
      id
      name
      country {
        id
        name
      }
      producers {
        id
        name
        whiskys {
          id
          name
          producer {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_COUNTIRES = gql`
  query Countries {
    countries {
      id
      name
      shortName
      alias
    }
  }
`;

export const GET_PRODUCER_BY_ID = gql`
  query ProducerById($id: ID!) {
    producer(id: $id) {
      id
      name
      whiskys {
        id
        name
        age
        blended
      }
      region {
        name
      }
      country {
        name
      }
    }
  }
`;

export const GET_WHISKY_BY_ID = gql`
  query WhiskyById($id: ID!) {
    whisky(id: $id) {
      id
      name
      age
      blended
      style {
        id
        name
      }
      producer {
        id
        name
        region {
          name
          alias
        }
        country {
          name
          alias
        }
        whiskys {
          id
          name
        }
      }
    }
  }
`;
