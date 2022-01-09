import React from "react";
import Query from "../../components/Query";
import CONFIGURATION_QUERY from "../../queries/configuration/configuration";
import Layout from "../../components/Layout";

const Configuration = ({children}) => {
    return (
            <Query query={CONFIGURATION_QUERY}>
                {({ data: { configuration: {data: { attributes }} } }) => {
                    return <Layout configuration={attributes} children={children} />;
                }}
            </Query>
    );
};

export default Configuration;
