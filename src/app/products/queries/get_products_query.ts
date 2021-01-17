import { gql } from 'apollo-angular';

export const GET_PRODUCTS_QUERY = gql`
  query {
    productos {
      id
      nombre
      publicado
    }
  }
`;
