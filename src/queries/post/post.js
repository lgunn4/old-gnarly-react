import gql from "graphql-tag";

const POST_QUERY = gql`
query Post($id: ID!) {
  post(id: $id) {
    data {
      id
      attributes {
        Title
        Date
        Text
        Images {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`;

export default POST_QUERY;
