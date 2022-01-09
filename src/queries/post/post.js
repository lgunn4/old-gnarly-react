import gql from "graphql-tag";

const POST_QUERY = gql`
query Post($id: ID!) {
  post(id: $id) {
    data {
      id
      attributes {
        Title
        Date
        Description
        Text
        categories {
          data {
            id
            attributes {
              Name
              Variant
            }
          }
        }
        Images {
          data {
            attributes {
              name
            }
          }
        }
        Pinned
      }
    }
  }
}
`;

export default POST_QUERY;
