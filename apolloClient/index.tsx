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
      distillers {
        id
        name
        region {
          name
        }
        whiskys {
          id
          name
          blended
          distiller {
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
      distillers {
        id
        name
        whiskys {
          id
          name
          distiller {
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

export const GET_DISTILLER_BY_ID = gql`
  query DistillerById($id: ID!) {
    distiller(id: $id) {
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
      distiller {
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
