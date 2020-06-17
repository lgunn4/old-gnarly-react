import gql from "graphql-tag";

const PAINTINGS_QUERY = gql`
  query Paintings {
    paintings {
      id
      title
      description
      photo {
        url
      }
      sold
      published
    }
  }
`;

export default PAINTINGS_QUERY;
