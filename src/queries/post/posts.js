import gql from "graphql-tag";

const POSTS_QUERY = gql`
query Post {
  posts {
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

export default POSTS_QUERY;
