import { gql } from 'apollo-angular';

export const UPDATE_PRODUCT_PUBLISHED_MUTATION = gql`
  mutation($id: ID!, $data: editProductoInput) {
    updateProducto(input: { where: { id: $id }, data: $data }) {
      producto {
        id
        publicado
      }
    }
  }
`;
