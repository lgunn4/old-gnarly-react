import gql from "graphql-tag";

const POSTS_FILTERED_QUERY = gql`
query categories($id: ID!) {
  category(id: $id) {
    data {
      id
      attributes {
        posts {
            data {
                id
                attributes {
                  Title
                  Date
                  Description
                  categories {
                    data {
                        id 
                        attributes {
                          Name
                          Variant
                        }
                      }
                  }
                }
            }
        }
      }
    }
  } 
}
`;

export default POSTS_FILTERED_QUERY;
