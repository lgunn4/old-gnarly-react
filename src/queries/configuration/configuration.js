import gql from "graphql-tag";

const CONFIGURATION_QUERY = gql`
query config {
  configuration {
    data {
      attributes {
        Name
        Bio
        Profile {
          data {
            attributes {
              name
              
            }
          }
        }
        Logo {
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

export default CONFIGURATION_QUERY;
