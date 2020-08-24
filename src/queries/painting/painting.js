import gql from "graphql-tag";

const PAINTING_QUERY = gql`
  query Paintings($id: ID!) {
    painting(id: $id) {
      id
      title
      description
      photo {
        url
      }
      sold
      published
      price
    }
  }
`;

export default PAINTING_QUERY;
