import gql from "graphql-tag";

const POSTS_QUERY = gql`
query Post {
  posts {
    data {
      id
      attributes {
        Title
        Date
        Description
        Text
        categories {
          data {
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
      }
    }
  }
}
`;

export default POSTS_QUERY;
