import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
query categories {
  categories {
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

export default CATEGORIES_QUERY;
