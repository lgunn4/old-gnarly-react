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
      pinned
    }
  }
`;

export default PAINTINGS_QUERY;
