import { gql } from 'apollo-angular';

export const DELETE_PRODUCT_MUTATION = gql`
  mutation($id: ID!) {
    deleteProducto(input: { where: { id: $id } }) {
      producto {
        id
      }
    }
  }
`;
