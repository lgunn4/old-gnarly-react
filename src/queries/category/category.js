import gql from "graphql-tag";

const CATEGORY_QUERY = gql`
query Category($id: ID!) {
  category(id: $id) {
    data {
      id
      attributes {
        Name
        Variant
        Description
      }
    }
  } 
}
`;

export default CATEGORY_QUERY;
