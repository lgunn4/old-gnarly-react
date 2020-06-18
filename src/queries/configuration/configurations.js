import gql from "graphql-tag";

const CONFIGURATIONS_QUERY = gql`
  query Configurations {
    configurations {
      id
      websiteName
      websiteDescription
      profilePicture {
        url
      }
      websiteLogo {
        url
      }
     
    }
  }
`;

export default CONFIGURATIONS_QUERY;
